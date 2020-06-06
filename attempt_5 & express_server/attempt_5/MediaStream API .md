Свойства MediaStream
MediaStream.active (только для чтения) – возвращает true, если MediaStream активен, или false в противном случае.
MediaStream.ended (только для чтения, устарел) – возвращает true, если завершенное событие было инициировано для объекта, что означает, что поток был полностью прочитан, или false, если конец потока не был достигнут.
MediaStream.id (только для чтения) – уникальный идентификатор объекта.
MediaStream.label (только для чтения, не рекомендуется) – уникальный идентификатор, назначаемый пользовательским агентом.


Обработчики событий
MediaStream.onactive – обработчик активного события, которое запускается, когда объект MediaStream становится активным.
MediaStream.onaddtrack – обработчик для события addtrack , которое запускается при добавлении нового объекта MediaStreamTrack .
MediaStream.onended (устарело) – обработчик завершенного события, которое запускается при прекращении потоковой передачи.
MediaStream.oninactive – обработчик неактивного события, которое запускается, когда объект MediaStream становится неактивным.
MediaStream.onremovetrack – обработчик события removetrack, которое вызывается при удалении из него объекта MediaStreamTrack .


методы
MediaStream.addTrack () – добавляет объект MediaStreamTrack, указанный в качестве аргумента для MediaStream. Если трек уже добавлен, ничего не происходит.
MediaStream.clone () – возвращает клон объекта MediaStream с новым идентификатором.
MediaStream.getAudioTracks () – возвращает список аудио объектов MediaStreamTrack из объекта MediaStream .
MediaStream.getTrackById () – Возвращает трек по ID. Если аргумент пуст или идентификатор не найден, возвращается ноль. Если несколько дорожек имеют одинаковый идентификатор, возвращается первый.
MediaStream.getTracks () – возвращает список всех объектов MediaStreamTrack из объекта MediaStream .
MediaStream.getVideoTracks () – возвращает список объектов MediaStreamTrack из объекта MediaStream .
MediaStream.removeTrack () – удаляет объект MediaStreamTrack, указанный в качестве аргумента, из MediaStream. Если дорожка уже удалена, ничего не происходит.












