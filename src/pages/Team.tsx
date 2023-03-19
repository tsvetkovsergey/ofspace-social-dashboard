import { Typography, Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { mockDataTeam } from '../data/data';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import useNotNullableTranslation from '../hooks/useNotNullableTranslation';

const dataGridStyles = [
  // Column Headers
  '[&_.MuiDataGrid-columnHeaders]:bg-gray-200 [&_.MuiDataGrid-columnHeaders]:text-gray-800',
  'dark:[&_.MuiDataGrid-columnHeaders]:bg-slate-800 dark:[&_.MuiDataGrid-columnHeaders]:text-slate-100',
  // Footer
  '[&_.MuiDataGrid-footerContainer]:bg-gray-200 [&_.MuiDataGrid-footerContainer]:text-gray-800',
  'dark:[&_.MuiDataGrid-footerContainer]:bg-slate-800 dark:[&_.MuiDataGrid-footerContainer]:text-slate-100',
  // Main Part
  '[&_.MuiDataGrid-virtualScroller]:bg-white [&_.MuiDataGrid-virtualScroller]:text-gray-800',
  'dark:[&_.MuiDataGrid-virtualScroller]:bg-slate-900 dark:[&_.MuiDataGrid-virtualScroller]:text-slate-100',
  // Grid Row
  'dark:[&_.MuiDataGrid-row:hover]:bg-slate-800',
  // Style for column 'Name'
  '[&_.name-column--cell]:text-blue-800 dark:[&_.name-column--cell]:text-blue-400',
  // Footer pagination
  '[&_.MuiTablePagination-root]:text-gray-800 dark:[&_.MuiTablePagination-root]:text-slate-100',
  // SVG
  '[&_svg]:text-gray-800 dark:[&_svg]:text-slate-100',
];

const Team = () => {
  const { t } = useNotNullableTranslation();

  const teamColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.3 },
    {
      field: 'name',
      headerName: t('Name'),
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: t('Age'),
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      flex: 0.5,
    },
    {
      field: 'phone',
      headerName: t('Phone Number'),
      flex: 0.8,
    },
    { field: 'email', headerName: t('Email'), flex: 1 },
    {
      field: 'access',
      headerName: t('Access Level'),
      flex: 1,
      minWidth: 160,
      renderCell: ({ row: { access } }: { row: { access: string } }) => (
        <Box
          className={`${
            access === 'admin'
              ? 'bg-blue-300 dark:bg-teal-800'
              : 'bg-blue-100 dark:bg-teal-600'
          }`}
          sx={{
            minWidth: '140px',
            m: '0 auto',
            p: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '4px',
          }}
        >
          {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
          {access === 'manager' && <SecurityOutlinedIcon />}
          {access === 'user' && <LockOpenOutlinedIcon />}
          {/* <Typography color={colors.grey[100]} sx={{ ml: '5px' }}> */}
          <p className="ml-1 text-sm font-normal text-gray-800 dark:text-slate-100">
            {t(access)}
          </p>
        </Box>
      ),
    },
  ];

  return (
    <Box>
      <Box className="w-full">
        <DataGrid
          autoHeight
          rows={mockDataTeam}
          columns={teamColumns}
          checkboxSelection
          className={dataGridStyles.join(' ')}
          sx={{
            border: 'none',
            '& .MuiDataGrid-cell': {
              borderBottom: 'none',
            },
            '& .MuiDataGrid-columnHeaders': {
              borderBottom: 'none',
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: 'none',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Team;
