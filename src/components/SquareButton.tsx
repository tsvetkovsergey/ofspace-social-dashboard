import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DataGridColumn, DataGridColumnID } from '../Types/DataGrid';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { HighViewDataGrid } from '../Types/Settings';
import { useDispatch } from 'react-redux';
import { setHighViewGrid } from '../store/settingsSlice';

type Props = {
  icon: JSX.Element;
  columns: DataGridColumn[];
  activeColumns: HighViewDataGrid;
};

const SquareButton = ({ icon, columns, activeColumns }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setHighViewGrid({
        ...activeColumns,
        [event.target.name]: event.target.checked,
      })
    );
  };

  const popupMenu = (
    <motion.ul
      className="absolute top-full right-0 z-20 mt-2 origin-top-right cursor-default rounded-lg border-[1px] border-primary-220 bg-primary-200 p-2 pl-4 text-left text-sm text-typo-700 shadow-lg dark:border-slate-400 dark:bg-slate-500 dark:text-slate-300"
      initial={{ opacity: 0, scale: 0, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ ease: 'easeOut', duration: 0.3 }}
    >
      <FormGroup>
        {columns.map(({ id, titleId }) => (
          <FormControlLabel
            key={id}
            control={
              <Switch
                checked={activeColumns[id]}
                onChange={handleChange}
                name={id}
                disabled={id === DataGridColumnID.Value}
              />
            }
            label={t(titleId)}
            sx={{
              '& .MuiFormControlLabel-label': {
                fontFamily: 'inherit',
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
              },
            }}
          />
        ))}
      </FormGroup>
    </motion.ul>
  );

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((currentState) => !currentState)}
        className="h-8 rounded-lg bg-primary-100 px-2 text-primary-700 transition hover:shadow-lg dark:bg-slate-800 dark:text-blue-500 dark:hover:bg-slate-700 dark:hover:shadow-none [&>svg]:h-6"
      >
        {icon}
      </button>
      <AnimatePresence>{isOpen && popupMenu}</AnimatePresence>
    </div>
  );
};

export default SquareButton;
