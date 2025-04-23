FROM python:3.13.3

RUN pip install --no-cache-dir --upgrade pip
# Install psycopg2 dependencies

RUN apt-get update && apt-get install -y \
    libpq-dev \
    gcc \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY ./app.py /app/app.py

CMD ["python3", "-m", "flask", "run", "--host=0.0.0.0", "--port=8080"]

EXPOSE 8080