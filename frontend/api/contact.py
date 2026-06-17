import json
import re
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler


EMAIL_PATTERN = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")


class handler(BaseHTTPRequestHandler):
    def _send_json(self, status, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_POST(self):
        content_length = int(self.headers.get("Content-Length", "0"))

        try:
            raw_body = self.rfile.read(content_length).decode("utf-8")
            payload = json.loads(raw_body or "{}")
        except (UnicodeDecodeError, json.JSONDecodeError):
            self._send_json(400, {"detail": "Invalid request body."})
            return

        name = str(payload.get("name", "")).strip()
        email = str(payload.get("email", "")).strip()
        company = str(payload.get("company", "")).strip()
        service = str(payload.get("service", "")).strip()
        message = str(payload.get("message", "")).strip()

        if not name or not email or not service or not message:
            self._send_json(400, {"detail": "Please complete your name, email, service, and message."})
            return

        if not EMAIL_PATTERN.match(email):
            self._send_json(400, {"detail": "Please enter a valid email address."})
            return

        if len(message) < 20:
            self._send_json(400, {"detail": "Please share a little more context so we can respond properly."})
            return

        received_at = datetime.now(timezone.utc).isoformat()

        print(
            json.dumps(
                {
                    "event": "contact_submission_received",
                    "name": name,
                    "email": email,
                    "company": company,
                    "service": service,
                    "received_at": received_at,
                }
            )
        )

        self._send_json(
            200,
            {
                "message": "Thank you. Your project inquiry has been received and YalaByte will follow up soon.",
                "received_at": received_at,
            },
        )
