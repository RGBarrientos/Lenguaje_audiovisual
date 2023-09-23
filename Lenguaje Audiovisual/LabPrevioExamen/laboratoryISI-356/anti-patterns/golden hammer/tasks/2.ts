abstract class Chart {
    abstract draw(data: number[]): void;
}

class BarChart extends Chart {
    draw(data: number[]) {
        console.log("Drawing bar chart:", data);
        // Lógica específica para dibujar gráficos de barra
    }
}

class PieChart extends Chart {
    draw(data: number[]) {
        console.log("Drawing pie chart:", data);
        // Lógica específica para dibujar gráficos de pastel
    }
}

class RadialChart extends Chart {
    draw(data: number[]) {
        console.log("Drawing radial chart:", data);
        // Lógica específica para dibujar gráficos radiales
    }
}

// Uso de las clases
const barChart = new BarChart();
const pieChart = new PieChart();
const radialChart = new RadialChart();

barChart.draw([1, 2, 3]);
pieChart.draw([4, 5, 6]);
radialChart.draw([7, 8, 9]);

/*class SimpleGraph {
    drawBarChart(data: number[]) {
        console.log("Drawing bar chart:", data);
        // Lógica para dibujar gráficos de barra
    }

    // Se agregaron con el tiempo
    drawPieChart(data: number[]) {
        console.log("Drawing pie chart:", data);
        // Lógica adaptada para dibujar gráficos de pastel
    }

    drawRadialChart(data: number[]) {
        console.log("Drawing radial chart:", data);
        // Lógica adaptada para dibujar gráficos radiales
    }

    // ... otras visualizaciones adaptadas.
}*/
