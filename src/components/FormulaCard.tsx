import { Card, CardContent } from "@/components/ui/card";
import { Formula } from "@/lib/types";

interface FormulaCardProps {
  formula: Formula;
}

export function FormulaCard({ formula }: FormulaCardProps) {
  return (
    <Card className="bg-accent/50 border-accent">
      <CardContent className="p-4">
        <h4 className="font-medium text-sm text-foreground mb-2">{formula.name}</h4>
        <div className="font-mono text-lg text-primary bg-background rounded-md px-3 py-2 text-center border">
          {formula.formula}
        </div>
        {formula.description && (
          <p className="text-xs text-muted-foreground mt-2">{formula.description}</p>
        )}
      </CardContent>
    </Card>
  );
}
