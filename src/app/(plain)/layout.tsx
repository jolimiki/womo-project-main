// app/(plain)/layout.tsx
export default function PlainLayout({ children }: { children: React.ReactNode }) {
  return <main className="auth-container">{children}</main>;
}
