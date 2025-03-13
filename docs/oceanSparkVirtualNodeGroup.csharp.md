# `oceanSparkVirtualNodeGroup` Submodule <a name="`oceanSparkVirtualNodeGroup` Submodule" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanSparkVirtualNodeGroup <a name="OceanSparkVirtualNodeGroup" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/ocean_spark_virtual_node_group spotinst_ocean_spark_virtual_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkVirtualNodeGroup(Construct Scope, string Id, OceanSparkVirtualNodeGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig">OceanSparkVirtualNodeGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig">OceanSparkVirtualNodeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OceanSparkVirtualNodeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanSparkVirtualNodeGroup.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanSparkVirtualNodeGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanSparkVirtualNodeGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanSparkVirtualNodeGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OceanSparkVirtualNodeGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OceanSparkVirtualNodeGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OceanSparkVirtualNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/ocean_spark_virtual_node_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OceanSparkVirtualNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.oceanSparkClusterIdInput">OceanSparkClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.virtualNodeGroupIdInput">VirtualNodeGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.oceanSparkClusterId">OceanSparkClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.virtualNodeGroupId">VirtualNodeGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OceanSparkClusterIdInput`<sup>Optional</sup> <a name="OceanSparkClusterIdInput" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.oceanSparkClusterIdInput"></a>

```csharp
public string OceanSparkClusterIdInput { get; }
```

- *Type:* string

---

##### `VirtualNodeGroupIdInput`<sup>Optional</sup> <a name="VirtualNodeGroupIdInput" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.virtualNodeGroupIdInput"></a>

```csharp
public string VirtualNodeGroupIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OceanSparkClusterId`<sup>Required</sup> <a name="OceanSparkClusterId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.oceanSparkClusterId"></a>

```csharp
public string OceanSparkClusterId { get; }
```

- *Type:* string

---

##### `VirtualNodeGroupId`<sup>Required</sup> <a name="VirtualNodeGroupId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.virtualNodeGroupId"></a>

```csharp
public string VirtualNodeGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanSparkVirtualNodeGroupConfig <a name="OceanSparkVirtualNodeGroupConfig" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkVirtualNodeGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string OceanSparkClusterId,
    string VirtualNodeGroupId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.oceanSparkClusterId">OceanSparkClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/ocean_spark_virtual_node_group#ocean_spark_cluster_id OceanSparkVirtualNodeGroup#ocean_spark_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.virtualNodeGroupId">VirtualNodeGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/ocean_spark_virtual_node_group#virtual_node_group_id OceanSparkVirtualNodeGroup#virtual_node_group_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/ocean_spark_virtual_node_group#id OceanSparkVirtualNodeGroup#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `OceanSparkClusterId`<sup>Required</sup> <a name="OceanSparkClusterId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.oceanSparkClusterId"></a>

```csharp
public string OceanSparkClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/ocean_spark_virtual_node_group#ocean_spark_cluster_id OceanSparkVirtualNodeGroup#ocean_spark_cluster_id}.

---

##### `VirtualNodeGroupId`<sup>Required</sup> <a name="VirtualNodeGroupId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.virtualNodeGroupId"></a>

```csharp
public string VirtualNodeGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/ocean_spark_virtual_node_group#virtual_node_group_id OceanSparkVirtualNodeGroup#virtual_node_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/ocean_spark_virtual_node_group#id OceanSparkVirtualNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



