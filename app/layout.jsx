import '@styles/global.css';

export const metadata = {
  title: 'Promptopia',
  Description: 'Discover & Share AI prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='pt-br'>
      <body>
        <div className='main'>
          <div className='gradient'/>
        </div>

        <main className='app'>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
