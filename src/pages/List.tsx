import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';

import { lessViewData } from '../data/data';
import PieChart from '../components/PieChart';
import { useAppSelector } from '../store/hooks';
import { selectMode } from '../store/themeSlice';
import { ThemeMode } from '../Types/Theme';
import { useSearchParams } from 'react-router-dom';

const List = () => {
  const [searchParams] = useSearchParams();
  const [expanded, setExpanded] = useState<string | false>(
    searchParams.get('id') || false
  );
  const isDarkMode = useAppSelector(selectMode) === ThemeMode.Dark;

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="[&_.MuiAccordion-root]:text-typo-600 [&_.MuiAccordion-root]:shadow-md dark:[&_.MuiAccordion-root]:border dark:[&_.MuiAccordion-root]:border-cyan-900 dark:[&_.MuiAccordion-root]:text-slate-100 dark:[&_.MuiAccordion-root]:shadow-sm dark:[&_.MuiAccordion-root]:shadow-cyan-900 dark:[&_.MuiSvgIcon-root]:fill-slate-100">
      {lessViewData.map(
        ({
          id,
          icon,
          title,
          progress,
          mainColor,
          hexLightColor,
          hexDarkColor,
          content,
        }) => (
          <Accordion
            key={id}
            expanded={expanded === id}
            onChange={handleChange(id)}
            className="dark:bg-slate-900"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                '& .MuiAccordionSummary-content': {
                  display: 'flex',
                  alignItems: 'center',
                },
              }}
            >
              <i
                className={`${mainColor} mr-5 flex h-9 w-9 items-center justify-center rounded-full text-white`}
              >
                {icon}
              </i>
              <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex">
                <div className="h-60 w-1/3 min-w-[22rem]">
                  <PieChart
                    data={[
                      {
                        id: '',
                        value: 100 - progress,
                        label: '',
                        color: 'transparent',
                      },
                      {
                        id: id,
                        value: progress,
                        label: id,
                        color: isDarkMode ? hexDarkColor : hexLightColor,
                      },
                    ]}
                  />
                </div>
                <div className="mx-auto max-w-2xl flex-1">
                  <Typography
                    sx={{
                      columns: '3 auto',
                      columnGap: '3rem',
                    }}
                  >
                    {content}
                  </Typography>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        )
      )}
    </div>
  );
};

export default List;
