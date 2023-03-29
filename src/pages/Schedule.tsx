import { useState } from 'react';
import {
  DateSelectArg,
  EventClickArg,
  formatDate,
  EventApi,
} from '@fullcalendar/core';
import ruLocale from '@fullcalendar/core/locales/ru';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/settingsSlice';
import useNotNullableTranslation from '../hooks/useNotNullableTranslation';
import Modal from '../components/Modal';

const Schedule = () => {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [removeModalIsOpen, setRemoveModalIsOpen] = useState(false);
  const language = useSelector(selectLanguage);
  const { t } = useNotNullableTranslation();

  const handleCloseWindow = () => {
    setAddModalIsOpen(false);
    setRemoveModalIsOpen(false);
  };

  const handleDateClick = (selected: DateSelectArg) => {
    setAddModalIsOpen(true);
    const title = prompt('Please enter a new title for your event');
    console.log(selected);
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    console.log(selected);
    console.log(Date.now());

    if (title) {
      calendarApi.addEvent({
        id: `${Date.now()}-${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: EventClickArg) => {
    console.log(selected.event);
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'?`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <>
      {/* Main part */}
      <Card>
        <div className="flex justify-between">
          {/* CALENDAR SIDEBAR */}
          <div className="flex-[1_1_20%] rounded">
            <h5 className="mb-6 text-[1.75em]">{t('Events')}</h5>
            <ul>
              {currentEvents.map((event) => (
                <li
                  key={event.id}
                  className="my-2 rounded bg-[#2c3e50] p-2 text-slate-100"
                >
                  <p>{event.title}</p>
                  <p>
                    {formatDate(event.startStr, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* CALENDAR */}
          <div className="ml-4 flex-[1_1_100%] [&_.fc-daygrid-day.fc-day-today]:bg-primary-200 dark:[&_.fc-daygrid-day.fc-day-today]:bg-slate-700">
            <FullCalendar
              height="75vh"
              locale={language === 'ru' ? ruLocale : undefined}
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                listPlugin,
                interactionPlugin,
              ]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              initialEvents={[
                { id: '1234', title: 'All-day event', date: '2022-12-25' },
                { id: '4321', title: 'Timed event', date: '2022-12-31' },
              ]}
            />
          </div>
        </div>
      </Card>
      {/* 2 Modals in 1 */}
      {(addModalIsOpen || removeModalIsOpen) && (
        <Modal
          isOpen={true}
          onClose={handleCloseWindow}
          title={addModalIsOpen ? 'Add New Event' : 'Remove Selected Event'}
          text="Please enter a new title for your event:"
        />
      )}
    </>
  );
};

export default Schedule;
