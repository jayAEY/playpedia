import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
} from "./ui/alert-dialog";
import { AlertDescription } from "./ui/alert";
import { PropsWithChildren } from "react";

// React.Dispatch<React.SetStateAction<boolean>>
interface Props {
  alertOpen: boolean;
  setAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
  alertMessage: string;
}
const AlertComponent = (props: Props) => {
  // const AlertComponent = (props: PropsWithChildren<Props>) => {
  return (
    <AlertDialog open={props.alertOpen}>
      <AlertDialogContent onEscapeKeyDown={() => props.setAlertOpen(false)}>
        <AlertDescription className="text-center font-semibold">
          {props.alertMessage}
        </AlertDescription>
        <AlertDialogAction onClick={() => props.setAlertOpen(false)}>
          Okay
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertComponent;
