import React from "react";
import { useSelector, useDispatch } from "react-redux";
import LinearProgress from "@mui/material/LinearProgress";
import { GLOBALTYPES } from "../redux/actions/globalTypes";
import { Toast, ToastContainer } from "react-bootstrap";
const Notify = () => {
  const { alert } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      {alert && alert.loading && <LinearProgress />}
      {alert && alert.error && (
        <ToastContainer
          className="p-3"
          position="top-end"
          style={{ zIndex: "999" }}
        >
          <Toast
            className="d-inline-block m-1"
            bg="danger"
            onClick={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
          >
            <Toast.Header>
              <strong className="me-auto">Error</strong>
              {/* <CloseButton /> */}
            </Toast.Header>
            <Toast.Body>{alert.error}</Toast.Body>
          </Toast>
        </ToastContainer>
      )}
      {alert && alert.success && (
        <ToastContainer
          className="p-3"
          position="top-end"
          style={{ zIndex: "999" }}
        >
          <Toast
            className="d-inline-block m-1"
            bg="primary"
            onClick={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
          >
            <Toast.Header>
              <strong className="me-auto">Success</strong>
              {/* <CloseButton /> */}
            </Toast.Header>
            <Toast.Body className="text-white">{alert.success}</Toast.Body>
          </Toast>
        </ToastContainer>
      )}
      {/* <ToastContainer /> */}
    </div>
  );
};
export default Notify;
