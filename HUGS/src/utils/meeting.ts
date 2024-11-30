import AgoraRTC from 'agora-rtc-sdk-ng';

export const APP_ID = 'your-agora-app-id';
export const TOKEN = null; // For development, use null. In production, implement token server

export const createAgoraClient = () => {
  return AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
};

export const createLocalTracks = async () => {
  return await AgoraRTC.createMicrophoneAndCameraTracks();
};