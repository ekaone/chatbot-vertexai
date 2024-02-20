import Chat from '@/components/chat'
import Link from 'next/link'

export const runtime = 'edge'

export default function Home() {
  return (
    <>
      <div className='mt-20'>
        <div className='flex items-center justify-center'>
          <Link href='/openai'>OpenAI</Link>
        </div>
        <div className='flex items-center justify-center'>
          <Link href='/vertexai'>VertexAI</Link>
        </div>
      </div>
    </>
  )
}
