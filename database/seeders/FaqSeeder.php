<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faqs = [
            [
                'question' => 'What crane types and lifting capacities are available in your fleet?',
                'answer' => 'Our diverse fleet includes all-terrain mobile cranes, truck-mounted cranes, rough-terrain cranes, and compact spider cranes ranging from 10 tonnes up to 550 tonnes. We cater for civil engineering, industrial plant maintenance, mining, and telecommunications installations.',
                'sort_order' => 1,
                'is_published' => true,
            ],
            [
                'question' => 'What is the difference between CPA Crane Hire and a Full Contract Lift?',
                'answer' => 'Under standard CPA crane hire, we supply the crane and an accredited operator, whilst you direct the operation, plan the lift, and provide your own insurance and appointed rigger. With a Full Contract Lift, Target Cranes manages the entire process from start to finish, including site risk assessments, method statements, lift engineering, insurance cover, and competent rigging supervision.',
                'sort_order' => 2,
                'is_published' => true,
            ],
            [
                'question' => 'Are your crane operators and riggers fully certified and accredited?',
                'answer' => 'Yes, every operator and rigger on our team holds valid TETA accreditations, medical fitness certificates, and up-to-date national competency cards. Furthermore, all lifting tackle and cranes undergo statutory DMR 18 periodic testing and load test certifications.',
                'sort_order' => 3,
                'is_published' => true,
            ],
            [
                'question' => 'Which geographic regions and provinces do you cover across South Africa?',
                'answer' => 'We operate primary depots in Gauteng, the Western Cape, and KwaZulu-Natal, enabling rapid deployment nationwide. We also handle cross-border industrial and infrastructure projects throughout Southern Africa with custom cross-border logistics support.',
                'sort_order' => 4,
                'is_published' => true,
            ],
            [
                'question' => 'What site preparations must be completed before a crane arrives?',
                'answer' => 'Prior to arrival, ensure the travel route and setup pad are clear of overhead power lines, underground services, and loose rubble. The ground must support the maximum outrigger point loadings, and our technical team can conduct pre-lift ground bearing pressure surveys whenever required.',
                'sort_order' => 5,
                'is_published' => true,
            ],
            [
                'question' => 'How quickly can you dispatch emergency crane assistance?',
                'answer' => 'We operate a 24-hour emergency support line for critical plant breakdowns, salvage operations, and infrastructure recovery. Depending on the required tonnage and site location, our dispatch teams can mobilize equipment within hours.',
                'sort_order' => 6,
                'is_published' => true,
            ],
        ];

        foreach ($faqs as $faq) {
            Faq::updateOrCreate(
                ['question' => $faq['question']],
                $faq
            );
        }
    }
}
