import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { businessSummaries } from "@/data/businessSummaries";

export function BusinessList() {
  return (
    <div className="grid gap-4 p-6 grid-cols-2">
      {businessSummaries.map((b) => (
        <Card key={b.business_name} className="shadow-md rounded-2xl">
          <CardHeader>
            <CardTitle>{b.business_name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{b.summary}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
