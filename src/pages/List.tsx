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

const List = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const isDarkMode = useAppSelector(selectMode) === ThemeMode.Dark;

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
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
              <div className="flex gap-10">
                <div className="h-60 w-1/3">
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
                <div className="mx-auto max-w-lg flex-1">
                  <Typography
                    sx={{
                      columns: '3 auto',
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
