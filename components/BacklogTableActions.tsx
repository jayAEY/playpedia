import { Button } from "@/components/ui/button";

import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BacklogGame } from "./BacklogTableColumns";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { BacklogForm } from "./BacklogForm";
import { useState } from "react";
import { CompletedForm } from "./CompletedForm";
import { toast } from "./ui/use-toast";
import { useSession } from "next-auth/react";

const BacklogTableActions = (game: { game: BacklogGame }) => {
  const { data: session, status } = useSession();
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const { id, name } = game.game;
  const email = session?.user.email;

  async function backlogEdit(id: number) {
    console.log(id);
    setAlertOpen(false);
  }

  async function backlogRemove(id: number) {
    try {
      const res = await fetch("/api/backlog", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, id }),
      });
      if (res.ok) {
        toast({
          title: `${name} removed`,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
        return;
      } else {
        let responseObject = await res.json();
        toast({
          title: `$Error ${responseObject}`,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 w-8 p-0"
          >
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {/* edit button */}
          <Dialog>
            <DialogTrigger asChild>
              <p className="px-2 py-1 text-sm cursor-pointer">Edit</p>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px] pt-2 pb-1">
              <DialogHeader>
                <DialogTitle className="hidden">{name}</DialogTitle>
                <DialogDescription className="hidden">
                  Enter additional info for backlog(optional):
                </DialogDescription>
              </DialogHeader>
              <BacklogForm
                name={name}
                addOrEdit="edit"
                id={id}
              />
              <DialogFooter></DialogFooter>
            </DialogContent>
          </Dialog>

          {/* remove button */}
          <p
            className="px-2 py-1 text-sm cursor-pointer"
            onClick={() => setAlertOpen(true)}
          >
            Remove
          </p>

          <AlertDialog open={alertOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to remove this entry?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This cannot be undone
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel
                  className="text-xs font-black"
                  onClick={() => setAlertOpen(false)}
                >
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  className="text-xs font-black"
                  onClick={() => backlogRemove(id)}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* Mark as Completed */}
          <Dialog>
            <DialogTrigger asChild>
              <p className="px-2 py-1 text-sm cursor-pointer">
                Mark as Completed
              </p>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] pt-2 pb-1">
              <DialogHeader>
                <DialogTitle className="hidden">{name}</DialogTitle>
                <DialogDescription className="hidden">
                  Enter additional info for completed(optional):
                </DialogDescription>
              </DialogHeader>
              <CompletedForm
                name={name}
                backlogRemove={backlogRemove}
                id={id}
              />
              <DialogFooter></DialogFooter>
            </DialogContent>
          </Dialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default BacklogTableActions;
