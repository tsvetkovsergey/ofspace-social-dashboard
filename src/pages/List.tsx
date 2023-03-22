import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';

import { lessViewData } from '../data/data';

const List = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {lessViewData.map(
        ({ id, icon, title, progress, mainColor, textColor, content }) => (
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
              <div>
                <Typography>{content}</Typography>
              </div>
            </AccordionDetails>
          </Accordion>
        )
      )}
    </div>
  );
};

export default List;
