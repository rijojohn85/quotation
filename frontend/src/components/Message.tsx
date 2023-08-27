import { Alert } from 'react-bootstrap';
interface MessageProps {
	variant: string;
	children: string;
}
const Message = ({ variant, children }: MessageProps) => {
	return <Alert variant={variant}> {children} </Alert>;
};

export default Message;
