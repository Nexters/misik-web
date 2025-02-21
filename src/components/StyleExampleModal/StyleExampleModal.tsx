import type { ModalProps } from "@/components/HomeNavigateConfirmModal/HomeNavigateConfirmModal";
import styles from "@/components/StyleExampleModal/StyleExampleModal.module.scss";
import Icon from "@/components/ui/Icon/Icon";
import Modal from "@/components/ui/Modal/Modal";
import Text from "@/components/ui/Text/Text";

const EXAMPLE_DATA = [
  {
    title: "친근한 말투",
    content:
      "매장도 전체적으로 깔끔하고 넓어서 오래 앉아있기에도 좋았어~ 직원들도 친절하게 응대해줘서 편하게 있다가 왔어ᄒᄒ",
  },
  {
    title: "믿음직한 말투",
    content:
      "매장이 매우 쾌적해요. 인테리어 디자인도 깔끔하고 테이블과 의자도 편안하게 배치되어 있어요. 직원분들도 친절하시고 서비스도 빨라요. 그래서 저는 앞으로도 자주 이용할 생각이에요.",
  },
  {
    title: "귀여운 말투",
    content:
      "매장도 가봤는데 깔끔하고 넓어서 좋더라🤩 직원들도 친절하게 응대해주고..^^ 다음에도 또 방문할 거예요! 🍕💕 추천추천!!",
  },
];

const StyleExampleModal = ({ isOpen, handleClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} isBackdropClose handleClose={handleClose}>
      <div className={styles.Modal}>
        <button className={styles.IconButton} onClick={handleClose}>
          <Icon name="close" />
        </button>
        {EXAMPLE_DATA.map((data) => (
          <div key={data.title}>
            <Text variant="titleSm" color="primary" align="center" as="h2">
              {data.title}
            </Text>
            <Text variant="bodyM" color="secondary" as="p">
              {data.content}
            </Text>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default StyleExampleModal;
