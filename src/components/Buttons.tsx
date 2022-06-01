
import { Button } from '@mantine/core'
import { useClipboard } from '@mantine/hooks';

interface IButtonProps {
    name:string
}

const Buttons:React.FC<IButtonProps> = ({name}) => {
    
    const clipboard = useClipboard();
  return (
    <Button
    variant="filled"
    type='submit'
  //   rightIcon={<Copy size={20} />}
    radius="md"
    color='green'
    size="sm"
  //   styles={{
  //     root: { paddingRight: 14, height: 48 },
  //     rightIcon: { marginLeft: 22 },
  //   }}
    onClick={() => clipboard.copy('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
    fullWidth
  >
   {name}
  </Button>
  )
}

export default Buttons