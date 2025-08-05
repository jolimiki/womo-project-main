import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mt-10 mb-20">
      <div className="content-container container-fluid">{children}</div>
    </section>
  );
}
