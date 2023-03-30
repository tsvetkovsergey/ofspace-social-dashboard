import { ChangeEvent, useState, useRef } from 'react';
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
import ModalTitle from '../components/ModalTitle';
import ModalContent from '../components/ModalContent';
import ModalText from '../components/ModalText';
import ModalActions from '../components/ModalActions';
import TextButton from '../components/TextButton';

const INITIAL_MODAL = {
  addModalIsOpen: false,
  removeModalIsOpen: false,
  title: '',
  text: '',
};

const Schedule = () => {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [modal, setModal] = useState(INITIAL_MODAL);
  const [addEventInput, setAddEventInput] = useState('');
  const dateSelectRef = useRef<DateSelectArg | null>(null);
  const eventSelectRef = useRef<EventClickArg | null>(null);

  const language = useSelector(selectLanguage);
  const { t } = useNotNullableTranslation();

  const handleCloseWindow = () => {
    setModal(INITIAL_MODAL);
    setAddEventInput('');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddEventInput(e.target.value);
  };

  const handleAddEvent = () => {
    if (!dateSelectRef.current) return;

    const selected = dateSelectRef.current;
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    // If entered event name is valid
    // add new event to calendar
    if (addEventInput.trim()) {
      calendarApi.addEvent({
        id: `${Date.now()}-${selected.startStr}-${addEventInput}`,
        title: addEventInput,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }

    // Close Modal Window and reset
    // input value and dateSelectRef
    handleCloseWindow();
    setAddEventInput('');
    dateSelectRef.current = null;
  };

  const handleRemoveEvent = () => {
    if (!eventSelectRef.current) return;

    const selected = eventSelectRef.current;
    selected.event.remove();

    // Close Modal Window and reset
    // eventSelectRef
    handleCloseWindow();
    eventSelectRef.current = null;
  };

  const handleDateClick = (selected: DateSelectArg) => {
    dateSelectRef.current = selected;
    setModal({
      addModalIsOpen: true,
      removeModalIsOpen: false,
      title: 'Add New Event',
      text: 'Please enter a new title for your event:',
    });
  };

  const handleEventClick = (selected: EventClickArg) => {
    eventSelectRef.current = selected;
    setModal({
      addModalIsOpen: false,
      removeModalIsOpen: true,
      title: 'Remove Event',
      text: `Are you sure you want to delete the event '${selected.event.title}'?`,
    });
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
      {/* 2 modal windows in 1 */}
      {(modal.addModalIsOpen || modal.removeModalIsOpen) && (
        <Modal isOpen={true} onClose={handleCloseWindow}>
          <ModalTitle>{modal.title}</ModalTitle>
          <ModalContent>
            <ModalText>{modal.text}</ModalText>
            {modal.addModalIsOpen && (
              <input
                value={addEventInput}
                onChange={handleInputChange}
                autoFocus
                className="mt-5 w-full rounded-md border border-gray-300 py-1 px-2 text-gray-900 outline-none transition hover:border-gray-400 hover:shadow-lg focus:border-blue-400 focus:shadow-lg dark:border-slate-500 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-300 dark:focus:border-slate-300"
              />
            )}
          </ModalContent>
          <ModalActions className="[&>button]:text-xs [&>button]:font-medium [&>button]:text-gray-500 dark:[&>button]:text-slate-400">
            <TextButton title={'CLOSE'} onClick={handleCloseWindow} />
            {modal.addModalIsOpen && (
              <TextButton title={'ADD'} onClick={handleAddEvent} />
            )}
            {modal.removeModalIsOpen && (
              <TextButton title={'DELETE'} onClick={handleRemoveEvent} />
            )}
          </ModalActions>
        </Modal>
      )}
      {/* 2 Modals in 1 */}
      {/* {(modal.addModalIsOpen || modal.removeModalIsOpen) && (
        <Modal
          isOpen={true}
          onClose={handleCloseWindow}
          title={modal.title}
          text={modal.text}
          options={modal.options}
        />
      )} */}
    </>
  );
};

export default Schedule;
