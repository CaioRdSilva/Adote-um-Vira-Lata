import { Modal, Button } from "flowbite-react";
import { useState } from "react";

function PopUp():JSX.Element {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setOpen(true)} className=" bg-orange-500 border-orange-500 text-white focus:ring-orange-500 rounded-md enabled:hover:bg-white hover:text-orange-500 " >Create New Blog Post</Button>

            <Modal show={isOpen} onClose={() =>setOpen(false)}>
                <Modal.Header>Create Post</Modal.Header>
                <Modal.Body>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default PopUp;