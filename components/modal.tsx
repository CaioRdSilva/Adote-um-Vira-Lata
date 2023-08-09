import { Modal, Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";

function PopUp(): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className=" bg-orange-500 border-orange-500 text-white focus:ring-orange-500 rounded-md enabled:hover:bg-white hover:text-orange-500 "
      >
        Create New Blog Post
      </Button>

      <Modal show={isOpen} onClose={() => setOpen(false)}>
        <Modal.Header>Create Post</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form onSubmit={(e) => {e.preventDefault();
                fetch("/api/blog", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: e.currentTarget.Title.value
                    })
                })
            }}>
                <Label htmlFor="Title">Post Title</Label>
                <TextInput id="Title" type={"text"} placeholder="Your title" required></TextInput>
                <Button type="submit">Submit</Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopUp;
