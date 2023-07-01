# `spotinst_ocean_aks_virtual_node_group`

Refer to the Terraform Registory for docs: [`spotinst_ocean_aks_virtual_node_group`](https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group).

# `oceanAksVirtualNodeGroup` Submodule <a name="`oceanAksVirtualNodeGroup` Submodule" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAksVirtualNodeGroup <a name="OceanAksVirtualNodeGroup" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group spotinst_ocean_aks_virtual_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroup(Construct Scope, string Id, OceanAksVirtualNodeGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig">OceanAksVirtualNodeGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig">OceanAksVirtualNodeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putAutoscale">PutAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putLabel">PutLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putLaunchSpecification">PutLaunchSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putResourceLimits">PutResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putTaint">PutTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetAutoscale">ResetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetLaunchSpecification">ResetLaunchSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetResourceLimits">ResetResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetTaint">ResetTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAutoscale` <a name="PutAutoscale" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putAutoscale"></a>

```csharp
private void PutAutoscale(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putAutoscale.parameter.value"></a>

- *Type:* object

---

##### `PutLabel` <a name="PutLabel" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putLabel"></a>

```csharp
private void PutLabel(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putLabel.parameter.value"></a>

- *Type:* object

---

##### `PutLaunchSpecification` <a name="PutLaunchSpecification" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putLaunchSpecification"></a>

```csharp
private void PutLaunchSpecification(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putLaunchSpecification.parameter.value"></a>

- *Type:* object

---

##### `PutResourceLimits` <a name="PutResourceLimits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putResourceLimits"></a>

```csharp
private void PutResourceLimits(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putResourceLimits.parameter.value"></a>

- *Type:* object

---

##### `PutTaint` <a name="PutTaint" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putTaint"></a>

```csharp
private void PutTaint(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putTaint.parameter.value"></a>

- *Type:* object

---

##### `ResetAutoscale` <a name="ResetAutoscale" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetAutoscale"></a>

```csharp
private void ResetAutoscale()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetLabel"></a>

```csharp
private void ResetLabel()
```

##### `ResetLaunchSpecification` <a name="ResetLaunchSpecification" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetLaunchSpecification"></a>

```csharp
private void ResetLaunchSpecification()
```

##### `ResetResourceLimits` <a name="ResetResourceLimits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetResourceLimits"></a>

```csharp
private void ResetResourceLimits()
```

##### `ResetTaint` <a name="ResetTaint" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetTaint"></a>

```csharp
private void ResetTaint()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetZones"></a>

```csharp
private void ResetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanAksVirtualNodeGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanAksVirtualNodeGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanAksVirtualNodeGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList">OceanAksVirtualNodeGroupAutoscaleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.label">Label</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList">OceanAksVirtualNodeGroupLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.launchSpecification">LaunchSpecification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList">OceanAksVirtualNodeGroupLaunchSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.resourceLimits">ResourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList">OceanAksVirtualNodeGroupResourceLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.taint">Taint</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList">OceanAksVirtualNodeGroupTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.autoscaleInput">AutoscaleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.labelInput">LabelInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.launchSpecificationInput">LaunchSpecificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.oceanIdInput">OceanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.resourceLimitsInput">ResourceLimitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.taintInput">TaintInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.zonesInput">ZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.oceanId">OceanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Autoscale`<sup>Required</sup> <a name="Autoscale" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.autoscale"></a>

```csharp
public OceanAksVirtualNodeGroupAutoscaleList Autoscale { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList">OceanAksVirtualNodeGroupAutoscaleList</a>

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.label"></a>

```csharp
public OceanAksVirtualNodeGroupLabelList Label { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList">OceanAksVirtualNodeGroupLabelList</a>

---

##### `LaunchSpecification`<sup>Required</sup> <a name="LaunchSpecification" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.launchSpecification"></a>

```csharp
public OceanAksVirtualNodeGroupLaunchSpecificationList LaunchSpecification { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList">OceanAksVirtualNodeGroupLaunchSpecificationList</a>

---

##### `ResourceLimits`<sup>Required</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.resourceLimits"></a>

```csharp
public OceanAksVirtualNodeGroupResourceLimitsList ResourceLimits { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList">OceanAksVirtualNodeGroupResourceLimitsList</a>

---

##### `Taint`<sup>Required</sup> <a name="Taint" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.taint"></a>

```csharp
public OceanAksVirtualNodeGroupTaintList Taint { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList">OceanAksVirtualNodeGroupTaintList</a>

---

##### `AutoscaleInput`<sup>Optional</sup> <a name="AutoscaleInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.autoscaleInput"></a>

```csharp
public object AutoscaleInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.labelInput"></a>

```csharp
public object LabelInput { get; }
```

- *Type:* object

---

##### `LaunchSpecificationInput`<sup>Optional</sup> <a name="LaunchSpecificationInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.launchSpecificationInput"></a>

```csharp
public object LaunchSpecificationInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OceanIdInput`<sup>Optional</sup> <a name="OceanIdInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.oceanIdInput"></a>

```csharp
public string OceanIdInput { get; }
```

- *Type:* string

---

##### `ResourceLimitsInput`<sup>Optional</sup> <a name="ResourceLimitsInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.resourceLimitsInput"></a>

```csharp
public object ResourceLimitsInput { get; }
```

- *Type:* object

---

##### `TaintInput`<sup>Optional</sup> <a name="TaintInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.taintInput"></a>

```csharp
public object TaintInput { get; }
```

- *Type:* object

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.zonesInput"></a>

```csharp
public string[] ZonesInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OceanId`<sup>Required</sup> <a name="OceanId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.oceanId"></a>

```csharp
public string OceanId { get; }
```

- *Type:* string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAksVirtualNodeGroupAutoscale <a name="OceanAksVirtualNodeGroupAutoscale" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupAutoscale {
    double AutoHeadroomPercentage = null,
    object AutoscaleHeadroom = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale.property.autoHeadroomPercentage">AutoHeadroomPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#auto_headroom_percentage OceanAksVirtualNodeGroup#auto_headroom_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale.property.autoscaleHeadroom">AutoscaleHeadroom</a></code> | <code>object</code> | autoscale_headroom block. |

---

##### `AutoHeadroomPercentage`<sup>Optional</sup> <a name="AutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale.property.autoHeadroomPercentage"></a>

```csharp
public double AutoHeadroomPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#auto_headroom_percentage OceanAksVirtualNodeGroup#auto_headroom_percentage}.

---

##### `AutoscaleHeadroom`<sup>Optional</sup> <a name="AutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale.property.autoscaleHeadroom"></a>

```csharp
public object AutoscaleHeadroom { get; set; }
```

- *Type:* object

autoscale_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#autoscale_headroom OceanAksVirtualNodeGroup#autoscale_headroom}

---

### OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom <a name="OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom {
    double NumOfUnits,
    double CpuPerUnit = null,
    double GpuPerUnit = null,
    double MemoryPerUnit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.numOfUnits">NumOfUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#num_of_units OceanAksVirtualNodeGroup#num_of_units}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.cpuPerUnit">CpuPerUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#cpu_per_unit OceanAksVirtualNodeGroup#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.gpuPerUnit">GpuPerUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#gpu_per_unit OceanAksVirtualNodeGroup#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#memory_per_unit OceanAksVirtualNodeGroup#memory_per_unit}. |

---

##### `NumOfUnits`<sup>Required</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.numOfUnits"></a>

```csharp
public double NumOfUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#num_of_units OceanAksVirtualNodeGroup#num_of_units}.

---

##### `CpuPerUnit`<sup>Optional</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.cpuPerUnit"></a>

```csharp
public double CpuPerUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#cpu_per_unit OceanAksVirtualNodeGroup#cpu_per_unit}.

---

##### `GpuPerUnit`<sup>Optional</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.gpuPerUnit"></a>

```csharp
public double GpuPerUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#gpu_per_unit OceanAksVirtualNodeGroup#gpu_per_unit}.

---

##### `MemoryPerUnit`<sup>Optional</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.memoryPerUnit"></a>

```csharp
public double MemoryPerUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#memory_per_unit OceanAksVirtualNodeGroup#memory_per_unit}.

---

### OceanAksVirtualNodeGroupConfig <a name="OceanAksVirtualNodeGroupConfig" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string OceanId,
    object Autoscale = null,
    string Id = null,
    object Label = null,
    object LaunchSpecification = null,
    object ResourceLimits = null,
    object Taint = null,
    string[] Zones = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#name OceanAksVirtualNodeGroup#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.oceanId">OceanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#ocean_id OceanAksVirtualNodeGroup#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.autoscale">Autoscale</a></code> | <code>object</code> | autoscale block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#id OceanAksVirtualNodeGroup#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.label">Label</a></code> | <code>object</code> | label block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.launchSpecification">LaunchSpecification</a></code> | <code>object</code> | launch_specification block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.resourceLimits">ResourceLimits</a></code> | <code>object</code> | resource_limits block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.taint">Taint</a></code> | <code>object</code> | taint block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.zones">Zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#zones OceanAksVirtualNodeGroup#zones}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#name OceanAksVirtualNodeGroup#name}.

---

##### `OceanId`<sup>Required</sup> <a name="OceanId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.oceanId"></a>

```csharp
public string OceanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#ocean_id OceanAksVirtualNodeGroup#ocean_id}.

---

##### `Autoscale`<sup>Optional</sup> <a name="Autoscale" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.autoscale"></a>

```csharp
public object Autoscale { get; set; }
```

- *Type:* object

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#autoscale OceanAksVirtualNodeGroup#autoscale}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#id OceanAksVirtualNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.label"></a>

```csharp
public object Label { get; set; }
```

- *Type:* object

label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#label OceanAksVirtualNodeGroup#label}

---

##### `LaunchSpecification`<sup>Optional</sup> <a name="LaunchSpecification" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.launchSpecification"></a>

```csharp
public object LaunchSpecification { get; set; }
```

- *Type:* object

launch_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#launch_specification OceanAksVirtualNodeGroup#launch_specification}

---

##### `ResourceLimits`<sup>Optional</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.resourceLimits"></a>

```csharp
public object ResourceLimits { get; set; }
```

- *Type:* object

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#resource_limits OceanAksVirtualNodeGroup#resource_limits}

---

##### `Taint`<sup>Optional</sup> <a name="Taint" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.taint"></a>

```csharp
public object Taint { get; set; }
```

- *Type:* object

taint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#taint OceanAksVirtualNodeGroup#taint}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.zones"></a>

```csharp
public string[] Zones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#zones OceanAksVirtualNodeGroup#zones}.

---

### OceanAksVirtualNodeGroupLabel <a name="OceanAksVirtualNodeGroupLabel" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupLabel {
    string Key,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}.

---

### OceanAksVirtualNodeGroupLaunchSpecification <a name="OceanAksVirtualNodeGroupLaunchSpecification" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupLaunchSpecification {
    double MaxPods = null,
    OceanAksVirtualNodeGroupLaunchSpecificationOsDisk OsDisk = null,
    object Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.property.maxPods">MaxPods</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#max_pods OceanAksVirtualNodeGroup#max_pods}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.property.osDisk">OsDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.property.tag">Tag</a></code> | <code>object</code> | tag block. |

---

##### `MaxPods`<sup>Optional</sup> <a name="MaxPods" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.property.maxPods"></a>

```csharp
public double MaxPods { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#max_pods OceanAksVirtualNodeGroup#max_pods}.

---

##### `OsDisk`<sup>Optional</sup> <a name="OsDisk" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.property.osDisk"></a>

```csharp
public OceanAksVirtualNodeGroupLaunchSpecificationOsDisk OsDisk { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#os_disk OceanAksVirtualNodeGroup#os_disk}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.property.tag"></a>

```csharp
public object Tag { get; set; }
```

- *Type:* object

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#tag OceanAksVirtualNodeGroup#tag}

---

### OceanAksVirtualNodeGroupLaunchSpecificationOsDisk <a name="OceanAksVirtualNodeGroupLaunchSpecificationOsDisk" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupLaunchSpecificationOsDisk {
    double SizeGb,
    string Type = null,
    object UtilizeEphemeralStorage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.property.sizeGb">SizeGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#size_gb OceanAksVirtualNodeGroup#size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#type OceanAksVirtualNodeGroup#type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.property.utilizeEphemeralStorage">UtilizeEphemeralStorage</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#utilize_ephemeral_storage OceanAksVirtualNodeGroup#utilize_ephemeral_storage}. |

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.property.sizeGb"></a>

```csharp
public double SizeGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#size_gb OceanAksVirtualNodeGroup#size_gb}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#type OceanAksVirtualNodeGroup#type}.

---

##### `UtilizeEphemeralStorage`<sup>Optional</sup> <a name="UtilizeEphemeralStorage" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.property.utilizeEphemeralStorage"></a>

```csharp
public object UtilizeEphemeralStorage { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#utilize_ephemeral_storage OceanAksVirtualNodeGroup#utilize_ephemeral_storage}.

---

### OceanAksVirtualNodeGroupLaunchSpecificationTag <a name="OceanAksVirtualNodeGroupLaunchSpecificationTag" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupLaunchSpecificationTag {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}.

---

### OceanAksVirtualNodeGroupResourceLimits <a name="OceanAksVirtualNodeGroupResourceLimits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupResourceLimits {
    double MaxInstanceCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#max_instance_count OceanAksVirtualNodeGroup#max_instance_count}. |

---

##### `MaxInstanceCount`<sup>Optional</sup> <a name="MaxInstanceCount" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#max_instance_count OceanAksVirtualNodeGroup#max_instance_count}.

---

### OceanAksVirtualNodeGroupTaint <a name="OceanAksVirtualNodeGroupTaint" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupTaint {
    string Effect,
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.property.effect">Effect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#effect OceanAksVirtualNodeGroup#effect}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#effect OceanAksVirtualNodeGroup#effect}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList <a name="OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.get"></a>

```csharp
private OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference <a name="OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resetCpuPerUnit">ResetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resetGpuPerUnit">ResetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resetMemoryPerUnit">ResetMemoryPerUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuPerUnit` <a name="ResetCpuPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resetCpuPerUnit"></a>

```csharp
private void ResetCpuPerUnit()
```

##### `ResetGpuPerUnit` <a name="ResetGpuPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resetGpuPerUnit"></a>

```csharp
private void ResetGpuPerUnit()
```

##### `ResetMemoryPerUnit` <a name="ResetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resetMemoryPerUnit"></a>

```csharp
private void ResetMemoryPerUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.cpuPerUnitInput">CpuPerUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.gpuPerUnitInput">GpuPerUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.memoryPerUnitInput">MemoryPerUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.numOfUnitsInput">NumOfUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.cpuPerUnit">CpuPerUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.gpuPerUnit">GpuPerUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.numOfUnits">NumOfUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuPerUnitInput`<sup>Optional</sup> <a name="CpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.cpuPerUnitInput"></a>

```csharp
public double CpuPerUnitInput { get; }
```

- *Type:* double

---

##### `GpuPerUnitInput`<sup>Optional</sup> <a name="GpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.gpuPerUnitInput"></a>

```csharp
public double GpuPerUnitInput { get; }
```

- *Type:* double

---

##### `MemoryPerUnitInput`<sup>Optional</sup> <a name="MemoryPerUnitInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.memoryPerUnitInput"></a>

```csharp
public double MemoryPerUnitInput { get; }
```

- *Type:* double

---

##### `NumOfUnitsInput`<sup>Optional</sup> <a name="NumOfUnitsInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.numOfUnitsInput"></a>

```csharp
public double NumOfUnitsInput { get; }
```

- *Type:* double

---

##### `CpuPerUnit`<sup>Required</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.cpuPerUnit"></a>

```csharp
public double CpuPerUnit { get; }
```

- *Type:* double

---

##### `GpuPerUnit`<sup>Required</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.gpuPerUnit"></a>

```csharp
public double GpuPerUnit { get; }
```

- *Type:* double

---

##### `MemoryPerUnit`<sup>Required</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.memoryPerUnit"></a>

```csharp
public double MemoryPerUnit { get; }
```

- *Type:* double

---

##### `NumOfUnits`<sup>Required</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.numOfUnits"></a>

```csharp
public double NumOfUnits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksVirtualNodeGroupAutoscaleList <a name="OceanAksVirtualNodeGroupAutoscaleList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupAutoscaleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.get"></a>

```csharp
private OceanAksVirtualNodeGroupAutoscaleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksVirtualNodeGroupAutoscaleOutputReference <a name="OceanAksVirtualNodeGroupAutoscaleOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupAutoscaleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.putAutoscaleHeadroom">PutAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resetAutoHeadroomPercentage">ResetAutoHeadroomPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resetAutoscaleHeadroom">ResetAutoscaleHeadroom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscaleHeadroom` <a name="PutAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.putAutoscaleHeadroom"></a>

```csharp
private void PutAutoscaleHeadroom(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.putAutoscaleHeadroom.parameter.value"></a>

- *Type:* object

---

##### `ResetAutoHeadroomPercentage` <a name="ResetAutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resetAutoHeadroomPercentage"></a>

```csharp
private void ResetAutoHeadroomPercentage()
```

##### `ResetAutoscaleHeadroom` <a name="ResetAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resetAutoscaleHeadroom"></a>

```csharp
private void ResetAutoscaleHeadroom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoscaleHeadroom">AutoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList">OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoHeadroomPercentageInput">AutoHeadroomPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoscaleHeadroomInput">AutoscaleHeadroomInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoHeadroomPercentage">AutoHeadroomPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoscaleHeadroom`<sup>Required</sup> <a name="AutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoscaleHeadroom"></a>

```csharp
public OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList AutoscaleHeadroom { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList">OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList</a>

---

##### `AutoHeadroomPercentageInput`<sup>Optional</sup> <a name="AutoHeadroomPercentageInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoHeadroomPercentageInput"></a>

```csharp
public double AutoHeadroomPercentageInput { get; }
```

- *Type:* double

---

##### `AutoscaleHeadroomInput`<sup>Optional</sup> <a name="AutoscaleHeadroomInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoscaleHeadroomInput"></a>

```csharp
public object AutoscaleHeadroomInput { get; }
```

- *Type:* object

---

##### `AutoHeadroomPercentage`<sup>Required</sup> <a name="AutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoHeadroomPercentage"></a>

```csharp
public double AutoHeadroomPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksVirtualNodeGroupLabelList <a name="OceanAksVirtualNodeGroupLabelList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupLabelList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.get"></a>

```csharp
private OceanAksVirtualNodeGroupLabelOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksVirtualNodeGroupLabelOutputReference <a name="OceanAksVirtualNodeGroupLabelOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupLabelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksVirtualNodeGroupLaunchSpecificationList <a name="OceanAksVirtualNodeGroupLaunchSpecificationList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupLaunchSpecificationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.get"></a>

```csharp
private OceanAksVirtualNodeGroupLaunchSpecificationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference <a name="OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resetUtilizeEphemeralStorage">ResetUtilizeEphemeralStorage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUtilizeEphemeralStorage` <a name="ResetUtilizeEphemeralStorage" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resetUtilizeEphemeralStorage"></a>

```csharp
private void ResetUtilizeEphemeralStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.sizeGbInput">SizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.utilizeEphemeralStorageInput">UtilizeEphemeralStorageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.sizeGb">SizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.utilizeEphemeralStorage">UtilizeEphemeralStorage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SizeGbInput`<sup>Optional</sup> <a name="SizeGbInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.sizeGbInput"></a>

```csharp
public double SizeGbInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UtilizeEphemeralStorageInput`<sup>Optional</sup> <a name="UtilizeEphemeralStorageInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.utilizeEphemeralStorageInput"></a>

```csharp
public object UtilizeEphemeralStorageInput { get; }
```

- *Type:* object

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.sizeGb"></a>

```csharp
public double SizeGb { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UtilizeEphemeralStorage`<sup>Required</sup> <a name="UtilizeEphemeralStorage" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.utilizeEphemeralStorage"></a>

```csharp
public object UtilizeEphemeralStorage { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.internalValue"></a>

```csharp
public OceanAksVirtualNodeGroupLaunchSpecificationOsDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a>

---


### OceanAksVirtualNodeGroupLaunchSpecificationOutputReference <a name="OceanAksVirtualNodeGroupLaunchSpecificationOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupLaunchSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.putOsDisk">PutOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resetMaxPods">ResetMaxPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resetOsDisk">ResetOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOsDisk` <a name="PutOsDisk" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.putOsDisk"></a>

```csharp
private void PutOsDisk(OceanAksVirtualNodeGroupLaunchSpecificationOsDisk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.putOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a>

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.putTag"></a>

```csharp
private void PutTag(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.putTag.parameter.value"></a>

- *Type:* object

---

##### `ResetMaxPods` <a name="ResetMaxPods" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resetMaxPods"></a>

```csharp
private void ResetMaxPods()
```

##### `ResetOsDisk` <a name="ResetOsDisk" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resetOsDisk"></a>

```csharp
private void ResetOsDisk()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.osDisk">OsDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference">OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList">OceanAksVirtualNodeGroupLaunchSpecificationTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.maxPodsInput">MaxPodsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.osDiskInput">OsDiskInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.tagInput">TagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.maxPods">MaxPods</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OsDisk`<sup>Required</sup> <a name="OsDisk" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.osDisk"></a>

```csharp
public OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference OsDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference">OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.tag"></a>

```csharp
public OceanAksVirtualNodeGroupLaunchSpecificationTagList Tag { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList">OceanAksVirtualNodeGroupLaunchSpecificationTagList</a>

---

##### `MaxPodsInput`<sup>Optional</sup> <a name="MaxPodsInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.maxPodsInput"></a>

```csharp
public double MaxPodsInput { get; }
```

- *Type:* double

---

##### `OsDiskInput`<sup>Optional</sup> <a name="OsDiskInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.osDiskInput"></a>

```csharp
public OceanAksVirtualNodeGroupLaunchSpecificationOsDisk OsDiskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a>

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.tagInput"></a>

```csharp
public object TagInput { get; }
```

- *Type:* object

---

##### `MaxPods`<sup>Required</sup> <a name="MaxPods" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.maxPods"></a>

```csharp
public double MaxPods { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksVirtualNodeGroupLaunchSpecificationTagList <a name="OceanAksVirtualNodeGroupLaunchSpecificationTagList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupLaunchSpecificationTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.get"></a>

```csharp
private OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference <a name="OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksVirtualNodeGroupResourceLimitsList <a name="OceanAksVirtualNodeGroupResourceLimitsList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupResourceLimitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.get"></a>

```csharp
private OceanAksVirtualNodeGroupResourceLimitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksVirtualNodeGroupResourceLimitsOutputReference <a name="OceanAksVirtualNodeGroupResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupResourceLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.resetMaxInstanceCount">ResetMaxInstanceCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInstanceCount` <a name="ResetMaxInstanceCount" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.resetMaxInstanceCount"></a>

```csharp
private void ResetMaxInstanceCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.maxInstanceCountInput">MaxInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInstanceCountInput`<sup>Optional</sup> <a name="MaxInstanceCountInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.maxInstanceCountInput"></a>

```csharp
public double MaxInstanceCountInput { get; }
```

- *Type:* double

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksVirtualNodeGroupTaintList <a name="OceanAksVirtualNodeGroupTaintList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupTaintList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.get"></a>

```csharp
private OceanAksVirtualNodeGroupTaintOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksVirtualNodeGroupTaintOutputReference <a name="OceanAksVirtualNodeGroupTaintOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksVirtualNodeGroupTaintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



