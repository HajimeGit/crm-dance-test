import { useFetchRecordingsQuery } from '../../services/rrweb/rrwebService';
import { useSearchParams } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { Box } from '@mui/system';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TablePagination,
  Typography,
} from '@mui/material';
import PlayerModal from '../../components/Player/PlayerModal';
import PageTitle from '../../components/Typography/PageTitle';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PendingIcon from '@mui/icons-material/Pending';

const Recordings = () => {
  const { data: rows, isLoading } = useFetchRecordingsQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page')) || 0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [open, setOpen] = useState(false);
  const [uuid, setUuid] = useState('');

  const handleModalOpen = (uuid: string) => {
    setOpen(true);
    setUuid(uuid);
  };

  const handleRowsPerPageChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    setRowsPerPage(+target.value);
    setPage(0);
    setSearchParams({ page: '0' });
  };

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
    setPage(page);
  };

  const Loading = isLoading ? (
    <PendingIcon fontSize={'large'} />
  ) : (
    <Typography mb={2} variant='h4'>
      No recordings here.
    </Typography>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {rows?.length ? (
        <>
          <PageTitle text='Recordings' />
          <TableContainer sx={{ maxWidth: '800px' }} component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Session UUID</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Date</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Play</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((session) => (
                    <TableRow key={session.uuid}>
                      <TableCell>{session.uuid}</TableCell>
                      <TableCell>
                        {new Date(session.createdAt).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => handleModalOpen(session.uuid)}>
                          <PlayCircleFilledIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              component='div'
              count={rows.length}
              onPageChange={(_, page) => handlePageChange(page)}
              page={page}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[5, 7]}
              onRowsPerPageChange={handleRowsPerPageChange}
            ></TablePagination>
          </TableContainer>
          <PlayerModal open={open} setOpen={setOpen} uuid={uuid} />
        </>
      ) : (
        Loading
      )}
    </Box>
  );
};

export default Recordings;
