-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 16-04-2022 a las 18:22:06
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `base_app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Articulo`
--

CREATE TABLE `Articulo` (
  `idArticulo` bigint(20) NOT NULL,
  `tipoCRL` text NOT NULL,
  `titulo` text NOT NULL,
  `nombreCRL` text NOT NULL,
  `tipoNI` text NOT NULL,
  `fechaEdicion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Carrera`
--

CREATE TABLE `Carrera` (
  `idCarrera` bigint(20) UNSIGNED NOT NULL,
  `nombre` text NOT NULL,
  `sigla` text NOT NULL,
  `codigoCarrera` text NOT NULL,
  `idInstituto` bigint(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `Carrera`
--

INSERT INTO `Carrera` (`idCarrera`, `nombre`, `sigla`, `codigoCarrera`, `idInstituto`) VALUES
(1, 'Ing.Computacion', 'Compu02', '100', 5),
(2, 'Ing.Diseño', 'Dise03', '200', 6),
(7, 'Ing.Mecatronica', 'Meca04', '15', 8),
(8, 'Ing.Fisica Aplicada', 'Fisi05', '20', 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Instituto`
--

CREATE TABLE `Instituto` (
  `idInstituto` bigint(20) UNSIGNED NOT NULL,
  `nombre` text NOT NULL,
  `codigoInstituto` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `Instituto`
--

INSERT INTO `Instituto` (`idInstituto`, `nombre`, `codigoInstituto`) VALUES
(5, 'Computacion', '100'),
(6, 'Diseño', '200'),
(7, 'Fisica', '300'),
(8, 'Mecatronica', '400');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Profesor`
--

CREATE TABLE `Profesor` (
  `idProfesor` bigint(20) UNSIGNED NOT NULL,
  `nombre` text NOT NULL,
  `apellidoP` text NOT NULL,
  `apellidoM` text NOT NULL,
  `grado` text NOT NULL,
  `idInstituto` bigint(11) UNSIGNED NOT NULL,
  `IdCarrera` bigint(11) UNSIGNED NOT NULL,
  `nombreInstituto` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `Profesor`
--

INSERT INTO `Profesor` (`idProfesor`, `nombre`, `apellidoP`, `apellidoM`, `grado`, `idInstituto`, `IdCarrera`, `nombreInstituto`) VALUES
(12, 'Abner', 'Castellanos', 'Diaz', 'Dr.', 5, 1, 'Computacion'),
(15, 'Ricardo', 'Flores', 'Magon', 'MTCA', 6, 2, 'Diseño'),
(20, 'Sebastian', 'Kole', 'Grant', 'Dr.', 8, 7, 'Mecatronica'),
(26, 'Marie', 'Sklodowska', 'Curie', 'Dr.', 7, 8, 'Fisica'),
(27, 'Aleksi', 'Sirpentov', 'Kurisav', 'Ing.', 5, 8, 'Fisica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ProfesorYArticulos`
--

CREATE TABLE `ProfesorYArticulos` (
  `idProfesor` bigint(20) UNSIGNED NOT NULL,
  `idArticulo` bigint(11) NOT NULL,
  `pos` int(11) NOT NULL,
  `validado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuarios`
--

CREATE TABLE `Usuarios` (
  `idUsuario` bigint(20) UNSIGNED NOT NULL,
  `Correo` text NOT NULL,
  `Password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `Usuarios`
--

INSERT INTO `Usuarios` (`idUsuario`, `Correo`, `Password`) VALUES
(12, 'abner@gmail.com', 'xxxxxx'),
(15, 'ricardo@gmail.com', 'floresmagon'),
(20, 'sebastian@gmail.com', 'doctorlove'),
(26, 'marie@gmail.com', 'radio69'),
(27, 'aleksi@gmail.com', 'aleksi');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Articulo`
--
ALTER TABLE `Articulo`
  ADD PRIMARY KEY (`idArticulo`);

--
-- Indices de la tabla `Carrera`
--
ALTER TABLE `Carrera`
  ADD PRIMARY KEY (`idCarrera`),
  ADD KEY `idCarrera` (`idCarrera`),
  ADD KEY `idInstituto` (`idInstituto`);

--
-- Indices de la tabla `Instituto`
--
ALTER TABLE `Instituto`
  ADD PRIMARY KEY (`idInstituto`),
  ADD KEY `idInstituto` (`idInstituto`),
  ADD KEY `idInstituto_2` (`idInstituto`);

--
-- Indices de la tabla `Profesor`
--
ALTER TABLE `Profesor`
  ADD PRIMARY KEY (`idProfesor`),
  ADD KEY `idProfesor` (`idProfesor`),
  ADD KEY `idProfesor_2` (`idProfesor`),
  ADD KEY `idInstituto` (`idInstituto`),
  ADD KEY `IdCarrera` (`IdCarrera`);

--
-- Indices de la tabla `ProfesorYArticulos`
--
ALTER TABLE `ProfesorYArticulos`
  ADD KEY `ProfesorYArticulos_ibfk_1` (`idArticulo`),
  ADD KEY `idProfesor` (`idProfesor`);

--
-- Indices de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  ADD PRIMARY KEY (`idUsuario`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Articulo`
--
ALTER TABLE `Articulo`
  MODIFY `idArticulo` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Carrera`
--
ALTER TABLE `Carrera`
  MODIFY `idCarrera` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `Instituto`
--
ALTER TABLE `Instituto`
  MODIFY `idInstituto` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `Profesor`
--
ALTER TABLE `Profesor`
  MODIFY `idProfesor` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  MODIFY `idUsuario` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Carrera`
--
ALTER TABLE `Carrera`
  ADD CONSTRAINT `Carrera_ibfk_2` FOREIGN KEY (`idInstituto`) REFERENCES `Instituto` (`idInstituto`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `Profesor`
--
ALTER TABLE `Profesor`
  ADD CONSTRAINT `Profesor_ibfk_1` FOREIGN KEY (`idProfesor`) REFERENCES `Usuarios` (`idUsuario`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Profesor_ibfk_2` FOREIGN KEY (`idInstituto`) REFERENCES `Instituto` (`idInstituto`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Profesor_ibfk_3` FOREIGN KEY (`IdCarrera`) REFERENCES `Carrera` (`idCarrera`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `ProfesorYArticulos`
--
ALTER TABLE `ProfesorYArticulos`
  ADD CONSTRAINT `ProfesorYArticulos_ibfk_1` FOREIGN KEY (`idArticulo`) REFERENCES `Articulo` (`idArticulo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ProfesorYArticulos_ibfk_2` FOREIGN KEY (`idProfesor`) REFERENCES `Profesor` (`idProfesor`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
