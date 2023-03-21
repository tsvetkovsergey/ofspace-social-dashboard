import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DataGridColumn, DataGridColumnID } from '../Types/DataGrid';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { HighViewDataGrid } from '../Types/Settings';
import { useDispatch } from 'react-redux';
import { setHighViewGrid } from '../store/settingsSlice';
import {
  popupScaleFadeIn,
  scaleOnTapSmallButtons,
} from '../data/animationSettings';
import { useAppSelector } from '../store/hooks';
import { selectMode } from '../store/themeSlice';
import { ThemeMode } from '../Types/Theme';
import useClickOutsideListener from '../hooks/useClickOutsideListener';
import useNotNullableTranslation from '../hooks/useNotNullableTranslation';

type Props = {
  icon: JSX.Element;
  columns: DataGridColumn[];
  activeColumns: HighViewDataGrid;
};

const SquareButton = ({ icon, columns, activeColumns }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const mode = useAppSelector(selectMode);
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { t } = useNotNullableTranslation();

  useClickOutsideListener(isOpen, setIsOpen, menuRef);

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
      className="absolute top-full right-0 z-20 mt-2 origin-top-right cursor-default rounded-lg border-[1px] border-primary-220 bg-primary-200 p-2 pl-4 text-left text-sm text-typo-700 shadow-lg dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
      {...popupScaleFadeIn}
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
                sx={{
                  '& .Mui-checked.Mui-disabled .MuiSwitch-thumb': {
                    backgroundColor:
                      mode === ThemeMode.Dark ? '#3a599e' : '#aaafd6',
                  },
                  '& .MuiSwitch-thumb': {
                    color: '#dbeafe',
                  },
                  '& .Mui-checked .MuiSwitch-thumb': {
                    color: '#3b82f6',
                  },
                  '& .Mui-checked+.MuiSwitch-track': {
                    backgroundColor: '#3b82f6',
                  },
                  '& .MuiSwitch-track': {
                    backgroundColor: '#64748b',
                  },
                }}
              />
            }
            label={t(titleId)}
            sx={{
              '& .MuiFormControlLabel-label': {
                fontFamily: 'inherit',
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
              },
              '& .MuiFormControlLabel-label.Mui-disabled': {
                color: mode === ThemeMode.Dark ? '#475569' : '#b8c1d9',
              },
            }}
          />
        ))}
      </FormGroup>
    </motion.ul>
  );

  return (
    <div ref={menuRef} className="relative">
      <motion.button
        onClick={() => setIsOpen((currentState) => !currentState)}
        className="h-8 rounded-lg bg-primary-100 px-2 text-primary-700 transition hover:shadow-lg dark:bg-slate-800 dark:text-blue-500 dark:hover:bg-slate-700 dark:hover:shadow-none [&>svg]:h-6"
        {...scaleOnTapSmallButtons}
      >
        {icon}
      </motion.button>
      <AnimatePresence>{isOpen && popupMenu}</AnimatePresence>
    </div>
  );
};

export default SquareButton;
