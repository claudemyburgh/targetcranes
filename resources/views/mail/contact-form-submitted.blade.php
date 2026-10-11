<x-mail::message>
# New Contact Form Submission

You have received a new inquiry from the website contact form:

**Name:** {{ $data['name'] }}  
**Email:** [{{ $data['email'] }}](mailto:{{ $data['email'] }})  
**Phone:** {{ !empty($data['phone']) ? $data['phone'] : 'Not provided' }}  
**Subject:** {{ $data['subject'] }}

---

### Message:
{{ $data['message'] }}

---

<x-mail::button :url="'mailto:' . $data['email'] . '?subject=Re: ' . urlencode($data['subject'])">
Reply via Email
</x-mail::button>

Regards,  
{{ config('app.name') }}
</x-mail::message>
