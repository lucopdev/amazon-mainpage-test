export default interface IMenuContextProps {
  isMenuModalOpen: boolean;
  setIsMenuModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openMenuModal: () => void;
  closeMenuModal: () => void;
}
