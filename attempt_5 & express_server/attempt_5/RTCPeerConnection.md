Для создания объектов RTCPeerConnection просто напишите

var pc = RTCPeerConnection(config);
//где аргумент config содержит хотя бы ключ, iceServers. Это массив объектов URL, 
//содержащих информацию о серверах STUN и TURN, используемых при поиске кандидатов на ICE. 