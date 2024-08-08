import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">All About Cats</h1>
        
        <div className="mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            alt="Cute cat"
            className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
          />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Characteristics of Cats</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>Independent nature</li>
              <li>Excellent hunters</li>
              <li>Flexible and agile bodies</li>
              <li>Sharp retractable claws</li>
              <li>Keen senses, especially hearing and night vision</li>
              <li>Communicate through vocalizations, body language, and scent</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Cat Breeds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Siamese", "Persian", "Maine Coon", "Bengal", "Scottish Fold", "Sphynx"].map((breed) => (
                <div key={breed} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold">{breed}</h3>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
