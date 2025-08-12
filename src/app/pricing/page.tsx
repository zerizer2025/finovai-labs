// app/pricing/page.tsx
export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '$0/mo',
      features: ['Basic AI Analysis', 'Limited Data Upload', 'Community Support'],
    },
    {
      name: 'Pro',
      price: '$29/mo',
      features: ['Advanced AI Analysis', 'Unlimited Data Upload', 'Priority Support'],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Custom AI Models', 'Dedicated Account Manager', 'On-Premise Option'],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold text-center mb-10">Pricing Plans</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col"
          >
            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <p className="text-3xl font-semibold mb-4">{plan.price}</p>
            <ul className="flex-1 space-y-2 mb-6">
              {plan.features.map((feature) => (
                <li key={feature}>✅ {feature}</li>
              ))}
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
