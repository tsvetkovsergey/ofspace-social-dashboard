import { ChangeEvent, useState, useRef, useEffect } from 'react';
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
import { AnimatePresence, motion } from 'framer-motion';
import { scaleOnTap } from '../data/animationSettings';
import { Language } from '../Types/Settings';

const INITIAL_MODAL = {
  addModalIsOpen: false,
  removeModalIsOpen: false,
  title: '',
  text: '',
  error: '',
};

const Schedule = () => {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [modal, setModal] = useState(INITIAL_MODAL);
  const [addEventInput, setAddEventInput] = useState('');
  const dateSelectRef = useRef<DateSelectArg | null>(null);
  const eventSelectRef = useRef<EventClickArg | null>(null);
  const removeButtonRef = useRef<HTMLButtonElement | null>(null);
  const calendarRef = useRef<FullCalendar>(null);

  const language = useSelector(selectLanguage);
  const { t } = useNotNullableTranslation();

  useEffect(() => {
    if (!removeButtonRef.current) return;
    removeButtonRef.current.focus();
  }, [modal.removeModalIsOpen]);

  const handleCloseWindow = () => {
    setModal(INITIAL_MODAL);
    setAddEventInput('');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddEventInput(e.target.value);
    setModal({ ...modal, error: '' });
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

      // Close Modal Window and reset
      // input value and dateSelectRef
      handleCloseWindow();
      // setAddEventInput('');
      dateSelectRef.current = null;
    }

    // If entered event name isn't valid
    // show error message
    if (!addEventInput.trim()) {
      setModal({ ...modal, error: t('Cannot be empty') });
    }
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
    // If date was clicked programatically ignore
    if (!selected.jsEvent) return;

    dateSelectRef.current = selected;
    setModal({
      addModalIsOpen: true,
      removeModalIsOpen: false,
      title: t('Add New Event'),
      text: t('Enter a new title'),
      error: '',
    });
  };

  const handleEventClick = (selected: EventClickArg) => {
    eventSelectRef.current = selected;
    setModal({
      addModalIsOpen: false,
      removeModalIsOpen: true,
      title: t('Remove Event'),
      text: `${t('Want to delete')} '${selected.event.title}'?`,
      error: '',
    });
  };

  const handleEventListClick = (event: EventApi) => {
    if (!calendarRef.current || !event.start) return;
    const calendar = calendarRef.current.getApi();
    calendar.gotoDate(event.start);
    calendar.select(event);
  };

  return (
    <>
      {/* Main part */}
      <Card>
        <div className="flex justify-between">
          {/* CALENDAR SIDEBAR */}
          <div className="flex-[1_1_20%] rounded">
            <h5 className="mb-6 text-[1.75em]">{t('Events')}</h5>
            {/* LIST OF EVENTS */}
            <ul className="h-auto overflow-y-scroll">
              {currentEvents.map((event) => (
                <li key={event.id}>
                  <motion.button
                    className="mb-2 w-full rounded bg-[#2c3e50] p-2 text-left text-slate-100 transition hover:bg-[#1e2b37]"
                    onClick={() => handleEventListClick(event)}
                    {...scaleOnTap}
                  >
                    <p>{event.title}</p>
                    <p>
                      {formatDate(event.startStr, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        locale:
                          language === Language.Russian ? 'ru-RU' : 'en-US',
                      })}
                    </p>
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* CALENDAR */}
          <div className="ml-4 h-[75vh] min-h-[30rem] flex-[1_1_100%] [&_.fc-daygrid-day.fc-day-today]:bg-primary-200 dark:[&_.fc-daygrid-day.fc-day-today]:bg-slate-700">
            <FullCalendar
              ref={calendarRef}
              height="100%"
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
                {
                  id: 'ie-0001',
                  title: 'Подготовить отчёт',
                  date: '2023-06-25',
                },
                { id: 'ie-0002', title: 'Презентация', date: '2024-03-07' },
              ]}
            />
          </div>
        </div>
      </Card>

      {/* 2 modal windows in 1 */}
      <AnimatePresence>
        {(modal.addModalIsOpen || modal.removeModalIsOpen) && (
          <Modal onClose={handleCloseWindow}>
            <ModalTitle>{modal.title}</ModalTitle>
            <ModalContent>
              <ModalText>{modal.text}</ModalText>
              {modal.addModalIsOpen && (
                <>
                  <input
                    value={addEventInput}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                      if (e.code === 'Enter') handleAddEvent();
                    }}
                    autoFocus
                    className={`${
                      modal.error
                        ? 'border-red-500 bg-red-100 dark:border-red-500 dark:bg-red-800/50'
                        : 'border-gray-300 hover:border-gray-400 focus:border-blue-400 dark:border-slate-500 dark:bg-slate-800 dark:hover:border-slate-300 dark:focus:border-slate-300'
                    } mt-5 w-full rounded-md border py-1 px-2 text-gray-900 outline-none transition hover:shadow-lg focus:shadow-lg dark:text-slate-300 `}
                  />
                  {modal.error && (
                    <p className="pt-1 text-sm text-red-500">{modal.error}</p>
                  )}
                </>
              )}
            </ModalContent>
            <ModalActions className="[&>button]:text-xs [&>button]:font-medium [&>button]:text-gray-500 dark:[&>button]:text-slate-400">
              <TextButton title={'CLOSE'} onClick={handleCloseWindow} />
              {modal.addModalIsOpen && (
                <TextButton title={'ADD'} onClick={handleAddEvent} />
              )}
              {modal.removeModalIsOpen && (
                <TextButton
                  buttonRef={removeButtonRef}
                  title={'DELETE'}
                  onClick={handleRemoveEvent}
                />
              )}
            </ModalActions>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Schedule;
