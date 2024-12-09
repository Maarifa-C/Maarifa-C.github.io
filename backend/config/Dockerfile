FROM python:3.11-slim

RUN pip install flask

COPY . .

CMD ["flask", "run", "--host=0.0.0.0"]