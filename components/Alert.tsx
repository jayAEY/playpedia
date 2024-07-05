import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type AlertProps = {
  alertOpen: boolean;
  alertMessage: string;
};

const Alert = ({ alertOpen, alertMessage }) => {
  return (
    <AlertDialog open={alertOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogCancel
            onClick={() => setAlertOpen(false)}
            className="w-0.5"
          >
            x
          </AlertDialogCancel>
          <AlertDialogTitle className="text-center min-h-14">
            {alertMessage}
          </AlertDialogTitle>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
