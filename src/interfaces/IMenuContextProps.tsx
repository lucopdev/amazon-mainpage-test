export default interface IMenuContextProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openMenuModal: () => void;
  closeMenuModal: () => void;
}
