import { motion } from 'framer-motion';
import { 
  Mic, MicOff, 
  Video, VideoOff, 
  MessageSquare, 
  Record,
  StopCircle,
  Languages,
  Edit3
} from 'lucide-react';

interface ControlsProps {
  isMuted: boolean;
  isVideoOff: boolean;
  isRecording: boolean;
  showChat: boolean;
  showCaptions: boolean;
  onToggleMute: () => void;
  onToggleVideo: () => void;
  onToggleRecording: () => void;
  onToggleChat: () => void;
  onToggleWhiteboard: () => void;
  onToggleCaptions: () => void;
}

export default function Controls({
  isMuted,
  isVideoOff,
  isRecording,
  showChat,
  showCaptions,
  onToggleMute,
  onToggleVideo,
  onToggleRecording,
  onToggleChat,
  onToggleWhiteboard,
  onToggleCaptions
}: ControlsProps) {
  return (
    <div className="mt-4 flex items-center justify-center space-x-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onToggleMute}
        className={`p-3 rounded-full ${isMuted ? 'bg-red-500' : 'bg-primary'} text-white`}
      >
        {isMuted ? <MicOff /> : <Mic />}
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onToggleVideo}
        className={`p-3 rounded-full ${isVideoOff ? 'bg-red-500' : 'bg-primary'} text-white`}
      >
        {isVideoOff ? <VideoOff /> : <Video />}
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onToggleRecording}
        className={`p-3 rounded-full ${isRecording ? 'bg-red-500' : 'bg-primary'} text-white`}
      >
        {isRecording ? <StopCircle /> : <Record />}
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onToggleChat}
        className="p-3 rounded-full bg-primary text-white"
      >
        <MessageSquare />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onToggleWhiteboard}
        className="p-3 rounded-full bg-primary text-white"
      >
        <Edit3 />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onToggleCaptions}
        className={`p-3 rounded-full ${showCaptions ? 'bg-primary' : 'bg-gray-500'} text-white`}
      >
        <Languages />
      </motion.button>
    </div>
  );
}