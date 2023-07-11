import Typography from "@mui/material/Typography";
import { ConnectionStatus } from "@/models/ConnectionStatus";

interface DoorStatusProps {
  status: ConnectionStatus;
}

export function DoorStatus({ status }: DoorStatusProps) {
  return (
    <Typography
      color={`${status === ConnectionStatus.Online ? 'success' : 'error'}.main`}
    >
      {status}
    </Typography>
  )
};
