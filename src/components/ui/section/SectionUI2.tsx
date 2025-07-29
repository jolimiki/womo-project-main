import style from './SectionUI2.module.scss';

type Props = {
  children: React.ReactNode;
  title?: string;
};

const SectionUI2 = ({ children, title }: Props) => {
  return (
    <>
      <section className={style.section}>
        <h3 className={style.title}>{title}</h3>
        <div>
          <div className={style.content}>{children}</div>
        </div>
      </section>
    </>
  );
};

export default SectionUI2;
