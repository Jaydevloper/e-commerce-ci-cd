const DrugIcon = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      viewBox="0 -960 960 960"
      width="18px"
      fill="#1D1D1D"
      {...props}
    >
      <path d="M420-260h120v-100h100v-120H540v-100H420v100H320v120h100v100ZM280-120q-33 0-56.5-23.5T200-200v-440q0-33 23.5-56.5T280-720h400q33 0 56.5 23.5T760-640v440q0 33-23.5 56.5T680-120H280Zm0-80h400v-440H280v440Zm-40-560v-80h480v80H240Zm40 120v440-440Z" />
    </svg>
  );
};
export default DrugIcon;
