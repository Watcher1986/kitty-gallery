export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='min-h-full lg:[margin-inline:10%] md:[margin-inline:10%]'>
      {children}
    </main>
  );
};
