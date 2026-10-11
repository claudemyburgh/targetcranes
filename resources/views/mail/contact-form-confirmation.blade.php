<x-mail::message>
# Thank You for Reaching Out, {{ $data['name'] }}!

Thank you for contacting **Target Cranes**. We have received your inquiry regarding **"{{ $data['subject'] }}"** and our team is already reviewing it.

We understand that your lifting and project timelines are critical, and we will get back to you as soon as possible.

---

### Need immediate assistance or prefer other ways to reach us?
You can contact our team directly through any of the following channels:

- **Phone:** [063 673 7500](tel:0636737500)
- **Email:** [enquiries@targetcranes.co.za](mailto:enquiries@targetcranes.co.za)
- **Location:** Fabriek St, Bellville South, Cape Town, 7530

---

<x-mail::panel>
**Your Message Summary:**  
{{ $data['message'] }}
</x-mail::panel>

Warm regards,  
**Target Cranes Team**  
[targetcranes.co.za]({{ config('app.url') }})
</x-mail::message>
