import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class SpindleSpeedAnalysis {

 private List<Double> spindleSpeeds;

 public SpindleSpeedAnalysis(List<String> rawData) {
 this.spindleSpeeds = new ArrayList<>();

 for (String line : rawData) {
 if (line.contains("PROCESS:1 SPINDLE SPEED:")) {
 double spindleSpeed = Double.parseDouble(line.split(":")[1].trim());
 this.spindleSpeeds.add(spindleSpeed);
 }
 }
 }

 public List<Double> getSpindleSpeeds() {
 return Collections.unmodifiableList(this.spindleSpeeds);
 }

 public void analyzeSpindleSpeeds() {
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class SpindleSpeedAnalysis {

 private List<Double> spindleSpeeds;
 private double[] coefficients;

 public SpindleSpeedAnalysis(List<String> rawData) {
 this.spindleSpeeds = new ArrayList<>();

 for (String line : rawData) {
 if (line.contains("PROCESS:1 SPINDLE SPEED:")) {
 double spindleSpeed = Double.parseDouble(line.split(":")[1].trim());
 this.spindleSpeeds.add(spindleSpeed);
 }
 }

 this.coefficients = linearRegression(this.spindleSpeeds);
 }

 public double[] getCoefficients() {
 return this.coefficients;
 }

 private double[] linearRegression(List<Double> spindleSpeeds) {
 double mean = mean(spindleSpeeds);
 double sumX = 0.0;
 double sumY = 0.0;
 double sumXY = 0.0;
 double sumX2 = 0.0;
 int n = spindleSpeeds.size();

 for (int i = 0; i < n; i++) {
 double x = i;
 double y = spindleSpeeds.get(i) - mean;
 sumX += x;
 sumY += y;
 sumXY += x * y;
 sumX2 += x * x;
 }

 double slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
 double intercept = mean - slope * sumX / n;

 double[] coefficients = {slope, intercept};
 return coefficients;
 }

 private double mean(List<Double> numbers) {
 double sum = 0.0;
 for (double number : numbers) {
 sum += number;
 }
 return sum / numbers.size();
 }
}

 // Здесь можно добавить код для анализа изменений скорости шпинделя
 // и построения графиков, например, с помощью библиотеки ChartJS
 }
}
