import { useParams } from 'react-router-dom';

const Meeting = () => {
  const { meetingId } = useParams(); // Extract the meeting ID from the URL

  return (
    <div>
      <h1>Welcome to the Meeting!</h1>
      <p>Meeting ID: {meetingId}</p>
    </div>
  );
};

export default Meeting;
