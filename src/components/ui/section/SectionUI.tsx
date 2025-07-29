import style from './SectionUI.module.scss';

type Props = {
  children: React.ReactNode;
  align?: 'start' | 'center';
};

const SectionUI = ({ children, align = 'start' }: Props) => {
  return (
    <>
      <section className={style.section} style={{ textAlign: align }}>
        {children}
      </section>
    </>
  );
};

export default SectionUI;
