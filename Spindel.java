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
 // Здесь можно добавить код для анализа изменений скорости шпинделя
 // и построения графиков, например, с помощью библиотеки ChartJS
 }
}
