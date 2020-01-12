from picamera import PiCamera
from time import sleep

camera = PiCamera()

camera.start_preview()
for i in range(5):
    sleep(0.5)
    camera.capture('/media/usb/image%s.jpg' % i)

camera.stop_preview()
