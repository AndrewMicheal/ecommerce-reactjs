import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/actions/ProductsAction";

const DeleteProductAdmin = (id) => {
    const [show, setShow] = useState(false);
    let dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async () => {
        await dispatch(deleteProduct(id))
        setShow(false);
        window.location.reload()
    }

    return [show , handleClose , handleShow , handleDelete]
}

export default DeleteProductAdmin