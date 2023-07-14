# `spotinst_elastigroup_aws_beanstalk`

Refer to the Terraform Registory for docs: [`spotinst_elastigroup_aws_beanstalk`](https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk).

# `elastigroupAwsBeanstalk` Submodule <a name="`elastigroupAwsBeanstalk` Submodule" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastigroupAwsBeanstalk <a name="ElastigroupAwsBeanstalk" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk spotinst_elastigroup_aws_beanstalk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAwsBeanstalk(Construct Scope, string Id, ElastigroupAwsBeanstalkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig">ElastigroupAwsBeanstalkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig">ElastigroupAwsBeanstalkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putDeploymentPreferences">PutDeploymentPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putManagedActions">PutManagedActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putScheduledTask">PutScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetBeanstalkEnvironmentId">ResetBeanstalkEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetBeanstalkEnvironmentName">ResetBeanstalkEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetDeploymentPreferences">ResetDeploymentPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetMaintenance">ResetMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetManagedActions">ResetManagedActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetScheduledTask">ResetScheduledTask</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDeploymentPreferences` <a name="PutDeploymentPreferences" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putDeploymentPreferences"></a>

```csharp
private void PutDeploymentPreferences(ElastigroupAwsBeanstalkDeploymentPreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putDeploymentPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a>

---

##### `PutManagedActions` <a name="PutManagedActions" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putManagedActions"></a>

```csharp
private void PutManagedActions(ElastigroupAwsBeanstalkManagedActions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putManagedActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a>

---

##### `PutScheduledTask` <a name="PutScheduledTask" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putScheduledTask"></a>

```csharp
private void PutScheduledTask(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putScheduledTask.parameter.value"></a>

- *Type:* object

---

##### `ResetBeanstalkEnvironmentId` <a name="ResetBeanstalkEnvironmentId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetBeanstalkEnvironmentId"></a>

```csharp
private void ResetBeanstalkEnvironmentId()
```

##### `ResetBeanstalkEnvironmentName` <a name="ResetBeanstalkEnvironmentName" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetBeanstalkEnvironmentName"></a>

```csharp
private void ResetBeanstalkEnvironmentName()
```

##### `ResetDeploymentPreferences` <a name="ResetDeploymentPreferences" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetDeploymentPreferences"></a>

```csharp
private void ResetDeploymentPreferences()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaintenance` <a name="ResetMaintenance" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetMaintenance"></a>

```csharp
private void ResetMaintenance()
```

##### `ResetManagedActions` <a name="ResetManagedActions" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetManagedActions"></a>

```csharp
private void ResetManagedActions()
```

##### `ResetScheduledTask` <a name="ResetScheduledTask" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetScheduledTask"></a>

```csharp
private void ResetScheduledTask()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

ElastigroupAwsBeanstalk.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

ElastigroupAwsBeanstalk.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

ElastigroupAwsBeanstalk.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.deploymentPreferences">DeploymentPreferences</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference">ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.managedActions">ManagedActions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference">ElastigroupAwsBeanstalkManagedActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.scheduledTask">ScheduledTask</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList">ElastigroupAwsBeanstalkScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentIdInput">BeanstalkEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentNameInput">BeanstalkEnvironmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.deploymentPreferencesInput">DeploymentPreferencesInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.desiredCapacityInput">DesiredCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.instanceTypesSpotInput">InstanceTypesSpotInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maintenanceInput">MaintenanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.managedActionsInput">ManagedActionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maxSizeInput">MaxSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.minSizeInput">MinSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.productInput">ProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.scheduledTaskInput">ScheduledTaskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentId">BeanstalkEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentName">BeanstalkEnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.desiredCapacity">DesiredCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.instanceTypesSpot">InstanceTypesSpot</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maintenance">Maintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maxSize">MaxSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.minSize">MinSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.product">Product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DeploymentPreferences`<sup>Required</sup> <a name="DeploymentPreferences" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.deploymentPreferences"></a>

```csharp
public ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference DeploymentPreferences { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference">ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference</a>

---

##### `ManagedActions`<sup>Required</sup> <a name="ManagedActions" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.managedActions"></a>

```csharp
public ElastigroupAwsBeanstalkManagedActionsOutputReference ManagedActions { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference">ElastigroupAwsBeanstalkManagedActionsOutputReference</a>

---

##### `ScheduledTask`<sup>Required</sup> <a name="ScheduledTask" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.scheduledTask"></a>

```csharp
public ElastigroupAwsBeanstalkScheduledTaskList ScheduledTask { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList">ElastigroupAwsBeanstalkScheduledTaskList</a>

---

##### `BeanstalkEnvironmentIdInput`<sup>Optional</sup> <a name="BeanstalkEnvironmentIdInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentIdInput"></a>

```csharp
public string BeanstalkEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `BeanstalkEnvironmentNameInput`<sup>Optional</sup> <a name="BeanstalkEnvironmentNameInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentNameInput"></a>

```csharp
public string BeanstalkEnvironmentNameInput { get; }
```

- *Type:* string

---

##### `DeploymentPreferencesInput`<sup>Optional</sup> <a name="DeploymentPreferencesInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.deploymentPreferencesInput"></a>

```csharp
public ElastigroupAwsBeanstalkDeploymentPreferences DeploymentPreferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a>

---

##### `DesiredCapacityInput`<sup>Optional</sup> <a name="DesiredCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.desiredCapacityInput"></a>

```csharp
public double DesiredCapacityInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceTypesSpotInput`<sup>Optional</sup> <a name="InstanceTypesSpotInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.instanceTypesSpotInput"></a>

```csharp
public string[] InstanceTypesSpotInput { get; }
```

- *Type:* string[]

---

##### `MaintenanceInput`<sup>Optional</sup> <a name="MaintenanceInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maintenanceInput"></a>

```csharp
public string MaintenanceInput { get; }
```

- *Type:* string

---

##### `ManagedActionsInput`<sup>Optional</sup> <a name="ManagedActionsInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.managedActionsInput"></a>

```csharp
public ElastigroupAwsBeanstalkManagedActions ManagedActionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a>

---

##### `MaxSizeInput`<sup>Optional</sup> <a name="MaxSizeInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maxSizeInput"></a>

```csharp
public double MaxSizeInput { get; }
```

- *Type:* double

---

##### `MinSizeInput`<sup>Optional</sup> <a name="MinSizeInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.minSizeInput"></a>

```csharp
public double MinSizeInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.productInput"></a>

```csharp
public string ProductInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ScheduledTaskInput`<sup>Optional</sup> <a name="ScheduledTaskInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.scheduledTaskInput"></a>

```csharp
public object ScheduledTaskInput { get; }
```

- *Type:* object

---

##### `BeanstalkEnvironmentId`<sup>Required</sup> <a name="BeanstalkEnvironmentId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentId"></a>

```csharp
public string BeanstalkEnvironmentId { get; }
```

- *Type:* string

---

##### `BeanstalkEnvironmentName`<sup>Required</sup> <a name="BeanstalkEnvironmentName" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentName"></a>

```csharp
public string BeanstalkEnvironmentName { get; }
```

- *Type:* string

---

##### `DesiredCapacity`<sup>Required</sup> <a name="DesiredCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.desiredCapacity"></a>

```csharp
public double DesiredCapacity { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceTypesSpot`<sup>Required</sup> <a name="InstanceTypesSpot" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.instanceTypesSpot"></a>

```csharp
public string[] InstanceTypesSpot { get; }
```

- *Type:* string[]

---

##### `Maintenance`<sup>Required</sup> <a name="Maintenance" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maintenance"></a>

```csharp
public string Maintenance { get; }
```

- *Type:* string

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maxSize"></a>

```csharp
public double MaxSize { get; }
```

- *Type:* double

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.minSize"></a>

```csharp
public double MinSize { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.product"></a>

```csharp
public string Product { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElastigroupAwsBeanstalkConfig <a name="ElastigroupAwsBeanstalkConfig" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAwsBeanstalkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double DesiredCapacity,
    string[] InstanceTypesSpot,
    double MaxSize,
    double MinSize,
    string Name,
    string Product,
    string Region,
    string BeanstalkEnvironmentId = null,
    string BeanstalkEnvironmentName = null,
    ElastigroupAwsBeanstalkDeploymentPreferences DeploymentPreferences = null,
    string Id = null,
    string Maintenance = null,
    ElastigroupAwsBeanstalkManagedActions ManagedActions = null,
    object ScheduledTask = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.desiredCapacity">DesiredCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#desired_capacity ElastigroupAwsBeanstalk#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.instanceTypesSpot">InstanceTypesSpot</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#instance_types_spot ElastigroupAwsBeanstalk#instance_types_spot}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.maxSize">MaxSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#max_size ElastigroupAwsBeanstalk#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.minSize">MinSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#min_size ElastigroupAwsBeanstalk#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#name ElastigroupAwsBeanstalk#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.product">Product</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#product ElastigroupAwsBeanstalk#product}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#region ElastigroupAwsBeanstalk#region}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.beanstalkEnvironmentId">BeanstalkEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#beanstalk_environment_id ElastigroupAwsBeanstalk#beanstalk_environment_id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.beanstalkEnvironmentName">BeanstalkEnvironmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#beanstalk_environment_name ElastigroupAwsBeanstalk#beanstalk_environment_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.deploymentPreferences">DeploymentPreferences</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a></code> | deployment_preferences block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#id ElastigroupAwsBeanstalk#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.maintenance">Maintenance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#maintenance ElastigroupAwsBeanstalk#maintenance}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.managedActions">ManagedActions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a></code> | managed_actions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.scheduledTask">ScheduledTask</a></code> | <code>object</code> | scheduled_task block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DesiredCapacity`<sup>Required</sup> <a name="DesiredCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.desiredCapacity"></a>

```csharp
public double DesiredCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#desired_capacity ElastigroupAwsBeanstalk#desired_capacity}.

---

##### `InstanceTypesSpot`<sup>Required</sup> <a name="InstanceTypesSpot" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.instanceTypesSpot"></a>

```csharp
public string[] InstanceTypesSpot { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#instance_types_spot ElastigroupAwsBeanstalk#instance_types_spot}.

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.maxSize"></a>

```csharp
public double MaxSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#max_size ElastigroupAwsBeanstalk#max_size}.

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.minSize"></a>

```csharp
public double MinSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#min_size ElastigroupAwsBeanstalk#min_size}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#name ElastigroupAwsBeanstalk#name}.

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.product"></a>

```csharp
public string Product { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#product ElastigroupAwsBeanstalk#product}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#region ElastigroupAwsBeanstalk#region}.

---

##### `BeanstalkEnvironmentId`<sup>Optional</sup> <a name="BeanstalkEnvironmentId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.beanstalkEnvironmentId"></a>

```csharp
public string BeanstalkEnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#beanstalk_environment_id ElastigroupAwsBeanstalk#beanstalk_environment_id}.

---

##### `BeanstalkEnvironmentName`<sup>Optional</sup> <a name="BeanstalkEnvironmentName" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.beanstalkEnvironmentName"></a>

```csharp
public string BeanstalkEnvironmentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#beanstalk_environment_name ElastigroupAwsBeanstalk#beanstalk_environment_name}.

---

##### `DeploymentPreferences`<sup>Optional</sup> <a name="DeploymentPreferences" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.deploymentPreferences"></a>

```csharp
public ElastigroupAwsBeanstalkDeploymentPreferences DeploymentPreferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a>

deployment_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#deployment_preferences ElastigroupAwsBeanstalk#deployment_preferences}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#id ElastigroupAwsBeanstalk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Maintenance`<sup>Optional</sup> <a name="Maintenance" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.maintenance"></a>

```csharp
public string Maintenance { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#maintenance ElastigroupAwsBeanstalk#maintenance}.

---

##### `ManagedActions`<sup>Optional</sup> <a name="ManagedActions" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.managedActions"></a>

```csharp
public ElastigroupAwsBeanstalkManagedActions ManagedActions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a>

managed_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#managed_actions ElastigroupAwsBeanstalk#managed_actions}

---

##### `ScheduledTask`<sup>Optional</sup> <a name="ScheduledTask" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.scheduledTask"></a>

```csharp
public object ScheduledTask { get; set; }
```

- *Type:* object

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#scheduled_task ElastigroupAwsBeanstalk#scheduled_task}

---

### ElastigroupAwsBeanstalkDeploymentPreferences <a name="ElastigroupAwsBeanstalkDeploymentPreferences" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAwsBeanstalkDeploymentPreferences {
    object AutomaticRoll = null,
    double BatchSizePercentage = null,
    double GracePeriod = null,
    object Strategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.automaticRoll">AutomaticRoll</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#automatic_roll ElastigroupAwsBeanstalk#automatic_roll}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#batch_size_percentage ElastigroupAwsBeanstalk#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.gracePeriod">GracePeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#grace_period ElastigroupAwsBeanstalk#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.strategy">Strategy</a></code> | <code>object</code> | strategy block. |

---

##### `AutomaticRoll`<sup>Optional</sup> <a name="AutomaticRoll" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.automaticRoll"></a>

```csharp
public object AutomaticRoll { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#automatic_roll ElastigroupAwsBeanstalk#automatic_roll}.

---

##### `BatchSizePercentage`<sup>Optional</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.batchSizePercentage"></a>

```csharp
public double BatchSizePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#batch_size_percentage ElastigroupAwsBeanstalk#batch_size_percentage}.

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.gracePeriod"></a>

```csharp
public double GracePeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#grace_period ElastigroupAwsBeanstalk#grace_period}.

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.strategy"></a>

```csharp
public object Strategy { get; set; }
```

- *Type:* object

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#strategy ElastigroupAwsBeanstalk#strategy}

---

### ElastigroupAwsBeanstalkDeploymentPreferencesStrategy <a name="ElastigroupAwsBeanstalkDeploymentPreferencesStrategy" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAwsBeanstalkDeploymentPreferencesStrategy {
    string Action = null,
    object ShouldDrainInstances = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#action ElastigroupAwsBeanstalk#action}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy.property.shouldDrainInstances">ShouldDrainInstances</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#should_drain_instances ElastigroupAwsBeanstalk#should_drain_instances}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#action ElastigroupAwsBeanstalk#action}.

---

##### `ShouldDrainInstances`<sup>Optional</sup> <a name="ShouldDrainInstances" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy.property.shouldDrainInstances"></a>

```csharp
public object ShouldDrainInstances { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#should_drain_instances ElastigroupAwsBeanstalk#should_drain_instances}.

---

### ElastigroupAwsBeanstalkManagedActions <a name="ElastigroupAwsBeanstalkManagedActions" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAwsBeanstalkManagedActions {
    ElastigroupAwsBeanstalkManagedActionsPlatformUpdate PlatformUpdate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions.property.platformUpdate">PlatformUpdate</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a></code> | platform_update block. |

---

##### `PlatformUpdate`<sup>Optional</sup> <a name="PlatformUpdate" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions.property.platformUpdate"></a>

```csharp
public ElastigroupAwsBeanstalkManagedActionsPlatformUpdate PlatformUpdate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a>

platform_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#platform_update ElastigroupAwsBeanstalk#platform_update}

---

### ElastigroupAwsBeanstalkManagedActionsPlatformUpdate <a name="ElastigroupAwsBeanstalkManagedActionsPlatformUpdate" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAwsBeanstalkManagedActionsPlatformUpdate {
    string PerformAt = null,
    string TimeWindow = null,
    string UpdateLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.property.performAt">PerformAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#perform_at ElastigroupAwsBeanstalk#perform_at}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.property.timeWindow">TimeWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#time_window ElastigroupAwsBeanstalk#time_window}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.property.updateLevel">UpdateLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#update_level ElastigroupAwsBeanstalk#update_level}. |

---

##### `PerformAt`<sup>Optional</sup> <a name="PerformAt" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.property.performAt"></a>

```csharp
public string PerformAt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#perform_at ElastigroupAwsBeanstalk#perform_at}.

---

##### `TimeWindow`<sup>Optional</sup> <a name="TimeWindow" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.property.timeWindow"></a>

```csharp
public string TimeWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#time_window ElastigroupAwsBeanstalk#time_window}.

---

##### `UpdateLevel`<sup>Optional</sup> <a name="UpdateLevel" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.property.updateLevel"></a>

```csharp
public string UpdateLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#update_level ElastigroupAwsBeanstalk#update_level}.

---

### ElastigroupAwsBeanstalkScheduledTask <a name="ElastigroupAwsBeanstalkScheduledTask" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAwsBeanstalkScheduledTask {
    string TaskType,
    string Adjustment = null,
    string AdjustmentPercentage = null,
    string BatchSizePercentage = null,
    string CronExpression = null,
    string Frequency = null,
    string GracePeriod = null,
    object IsEnabled = null,
    string MaxCapacity = null,
    string MinCapacity = null,
    string ScaleMaxCapacity = null,
    string ScaleMinCapacity = null,
    string ScaleTargetCapacity = null,
    string StartTime = null,
    string TargetCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.taskType">TaskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#task_type ElastigroupAwsBeanstalk#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.adjustment">Adjustment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#adjustment ElastigroupAwsBeanstalk#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.adjustmentPercentage">AdjustmentPercentage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#adjustment_percentage ElastigroupAwsBeanstalk#adjustment_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#batch_size_percentage ElastigroupAwsBeanstalk#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.cronExpression">CronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#cron_expression ElastigroupAwsBeanstalk#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.frequency">Frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#frequency ElastigroupAwsBeanstalk#frequency}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.gracePeriod">GracePeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#grace_period ElastigroupAwsBeanstalk#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#is_enabled ElastigroupAwsBeanstalk#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.maxCapacity">MaxCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#max_capacity ElastigroupAwsBeanstalk#max_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.minCapacity">MinCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#min_capacity ElastigroupAwsBeanstalk#min_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.scaleMaxCapacity">ScaleMaxCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#scale_max_capacity ElastigroupAwsBeanstalk#scale_max_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.scaleMinCapacity">ScaleMinCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#scale_min_capacity ElastigroupAwsBeanstalk#scale_min_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.scaleTargetCapacity">ScaleTargetCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#scale_target_capacity ElastigroupAwsBeanstalk#scale_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#start_time ElastigroupAwsBeanstalk#start_time}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.targetCapacity">TargetCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#target_capacity ElastigroupAwsBeanstalk#target_capacity}. |

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.taskType"></a>

```csharp
public string TaskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#task_type ElastigroupAwsBeanstalk#task_type}.

---

##### `Adjustment`<sup>Optional</sup> <a name="Adjustment" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.adjustment"></a>

```csharp
public string Adjustment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#adjustment ElastigroupAwsBeanstalk#adjustment}.

---

##### `AdjustmentPercentage`<sup>Optional</sup> <a name="AdjustmentPercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.adjustmentPercentage"></a>

```csharp
public string AdjustmentPercentage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#adjustment_percentage ElastigroupAwsBeanstalk#adjustment_percentage}.

---

##### `BatchSizePercentage`<sup>Optional</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.batchSizePercentage"></a>

```csharp
public string BatchSizePercentage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#batch_size_percentage ElastigroupAwsBeanstalk#batch_size_percentage}.

---

##### `CronExpression`<sup>Optional</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.cronExpression"></a>

```csharp
public string CronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#cron_expression ElastigroupAwsBeanstalk#cron_expression}.

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#frequency ElastigroupAwsBeanstalk#frequency}.

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.gracePeriod"></a>

```csharp
public string GracePeriod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#grace_period ElastigroupAwsBeanstalk#grace_period}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#is_enabled ElastigroupAwsBeanstalk#is_enabled}.

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.maxCapacity"></a>

```csharp
public string MaxCapacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#max_capacity ElastigroupAwsBeanstalk#max_capacity}.

---

##### `MinCapacity`<sup>Optional</sup> <a name="MinCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.minCapacity"></a>

```csharp
public string MinCapacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#min_capacity ElastigroupAwsBeanstalk#min_capacity}.

---

##### `ScaleMaxCapacity`<sup>Optional</sup> <a name="ScaleMaxCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.scaleMaxCapacity"></a>

```csharp
public string ScaleMaxCapacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#scale_max_capacity ElastigroupAwsBeanstalk#scale_max_capacity}.

---

##### `ScaleMinCapacity`<sup>Optional</sup> <a name="ScaleMinCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.scaleMinCapacity"></a>

```csharp
public string ScaleMinCapacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#scale_min_capacity ElastigroupAwsBeanstalk#scale_min_capacity}.

---

##### `ScaleTargetCapacity`<sup>Optional</sup> <a name="ScaleTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.scaleTargetCapacity"></a>

```csharp
public string ScaleTargetCapacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#scale_target_capacity ElastigroupAwsBeanstalk#scale_target_capacity}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#start_time ElastigroupAwsBeanstalk#start_time}.

---

##### `TargetCapacity`<sup>Optional</sup> <a name="TargetCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.targetCapacity"></a>

```csharp
public string TargetCapacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.1/docs/resources/elastigroup_aws_beanstalk#target_capacity ElastigroupAwsBeanstalk#target_capacity}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference <a name="ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.putStrategy">PutStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetAutomaticRoll">ResetAutomaticRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetBatchSizePercentage">ResetBatchSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetStrategy">ResetStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStrategy` <a name="PutStrategy" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.putStrategy"></a>

```csharp
private void PutStrategy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.putStrategy.parameter.value"></a>

- *Type:* object

---

##### `ResetAutomaticRoll` <a name="ResetAutomaticRoll" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetAutomaticRoll"></a>

```csharp
private void ResetAutomaticRoll()
```

##### `ResetBatchSizePercentage` <a name="ResetBatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetBatchSizePercentage"></a>

```csharp
private void ResetBatchSizePercentage()
```

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetGracePeriod"></a>

```csharp
private void ResetGracePeriod()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetStrategy"></a>

```csharp
private void ResetStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList">ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.automaticRollInput">AutomaticRollInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.batchSizePercentageInput">BatchSizePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.gracePeriodInput">GracePeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.strategyInput">StrategyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.automaticRoll">AutomaticRoll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.gracePeriod">GracePeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.strategy"></a>

```csharp
public ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList Strategy { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList">ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList</a>

---

##### `AutomaticRollInput`<sup>Optional</sup> <a name="AutomaticRollInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.automaticRollInput"></a>

```csharp
public object AutomaticRollInput { get; }
```

- *Type:* object

---

##### `BatchSizePercentageInput`<sup>Optional</sup> <a name="BatchSizePercentageInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.batchSizePercentageInput"></a>

```csharp
public double BatchSizePercentageInput { get; }
```

- *Type:* double

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.gracePeriodInput"></a>

```csharp
public double GracePeriodInput { get; }
```

- *Type:* double

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.strategyInput"></a>

```csharp
public object StrategyInput { get; }
```

- *Type:* object

---

##### `AutomaticRoll`<sup>Required</sup> <a name="AutomaticRoll" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.automaticRoll"></a>

```csharp
public object AutomaticRoll { get; }
```

- *Type:* object

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.batchSizePercentage"></a>

```csharp
public double BatchSizePercentage { get; }
```

- *Type:* double

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.gracePeriod"></a>

```csharp
public double GracePeriod { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.internalValue"></a>

```csharp
public ElastigroupAwsBeanstalkDeploymentPreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a>

---


### ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList <a name="ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.get"></a>

```csharp
private ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference <a name="ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resetShouldDrainInstances">ResetShouldDrainInstances</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetShouldDrainInstances` <a name="ResetShouldDrainInstances" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resetShouldDrainInstances"></a>

```csharp
private void ResetShouldDrainInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.shouldDrainInstancesInput">ShouldDrainInstancesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.shouldDrainInstances">ShouldDrainInstances</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `ShouldDrainInstancesInput`<sup>Optional</sup> <a name="ShouldDrainInstancesInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.shouldDrainInstancesInput"></a>

```csharp
public object ShouldDrainInstancesInput { get; }
```

- *Type:* object

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `ShouldDrainInstances`<sup>Required</sup> <a name="ShouldDrainInstances" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.shouldDrainInstances"></a>

```csharp
public object ShouldDrainInstances { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAwsBeanstalkManagedActionsOutputReference <a name="ElastigroupAwsBeanstalkManagedActionsOutputReference" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAwsBeanstalkManagedActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.putPlatformUpdate">PutPlatformUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.resetPlatformUpdate">ResetPlatformUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPlatformUpdate` <a name="PutPlatformUpdate" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.putPlatformUpdate"></a>

```csharp
private void PutPlatformUpdate(ElastigroupAwsBeanstalkManagedActionsPlatformUpdate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.putPlatformUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a>

---

##### `ResetPlatformUpdate` <a name="ResetPlatformUpdate" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.resetPlatformUpdate"></a>

```csharp
private void ResetPlatformUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.platformUpdate">PlatformUpdate</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference">ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.platformUpdateInput">PlatformUpdateInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlatformUpdate`<sup>Required</sup> <a name="PlatformUpdate" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.platformUpdate"></a>

```csharp
public ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference PlatformUpdate { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference">ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference</a>

---

##### `PlatformUpdateInput`<sup>Optional</sup> <a name="PlatformUpdateInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.platformUpdateInput"></a>

```csharp
public ElastigroupAwsBeanstalkManagedActionsPlatformUpdate PlatformUpdateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.internalValue"></a>

```csharp
public ElastigroupAwsBeanstalkManagedActions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a>

---


### ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference <a name="ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resetPerformAt">ResetPerformAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resetTimeWindow">ResetTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resetUpdateLevel">ResetUpdateLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPerformAt` <a name="ResetPerformAt" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resetPerformAt"></a>

```csharp
private void ResetPerformAt()
```

##### `ResetTimeWindow` <a name="ResetTimeWindow" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resetTimeWindow"></a>

```csharp
private void ResetTimeWindow()
```

##### `ResetUpdateLevel` <a name="ResetUpdateLevel" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resetUpdateLevel"></a>

```csharp
private void ResetUpdateLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.performAtInput">PerformAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.timeWindowInput">TimeWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.updateLevelInput">UpdateLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.performAt">PerformAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.timeWindow">TimeWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.updateLevel">UpdateLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PerformAtInput`<sup>Optional</sup> <a name="PerformAtInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.performAtInput"></a>

```csharp
public string PerformAtInput { get; }
```

- *Type:* string

---

##### `TimeWindowInput`<sup>Optional</sup> <a name="TimeWindowInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.timeWindowInput"></a>

```csharp
public string TimeWindowInput { get; }
```

- *Type:* string

---

##### `UpdateLevelInput`<sup>Optional</sup> <a name="UpdateLevelInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.updateLevelInput"></a>

```csharp
public string UpdateLevelInput { get; }
```

- *Type:* string

---

##### `PerformAt`<sup>Required</sup> <a name="PerformAt" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.performAt"></a>

```csharp
public string PerformAt { get; }
```

- *Type:* string

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.timeWindow"></a>

```csharp
public string TimeWindow { get; }
```

- *Type:* string

---

##### `UpdateLevel`<sup>Required</sup> <a name="UpdateLevel" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.updateLevel"></a>

```csharp
public string UpdateLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.internalValue"></a>

```csharp
public ElastigroupAwsBeanstalkManagedActionsPlatformUpdate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a>

---


### ElastigroupAwsBeanstalkScheduledTaskList <a name="ElastigroupAwsBeanstalkScheduledTaskList" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAwsBeanstalkScheduledTaskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.get"></a>

```csharp
private ElastigroupAwsBeanstalkScheduledTaskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAwsBeanstalkScheduledTaskOutputReference <a name="ElastigroupAwsBeanstalkScheduledTaskOutputReference" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAwsBeanstalkScheduledTaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetAdjustment">ResetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetAdjustmentPercentage">ResetAdjustmentPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetBatchSizePercentage">ResetBatchSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetCronExpression">ResetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetMinCapacity">ResetMinCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetScaleMaxCapacity">ResetScaleMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetScaleMinCapacity">ResetScaleMinCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetScaleTargetCapacity">ResetScaleTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetTargetCapacity">ResetTargetCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdjustment` <a name="ResetAdjustment" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetAdjustment"></a>

```csharp
private void ResetAdjustment()
```

##### `ResetAdjustmentPercentage` <a name="ResetAdjustmentPercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetAdjustmentPercentage"></a>

```csharp
private void ResetAdjustmentPercentage()
```

##### `ResetBatchSizePercentage` <a name="ResetBatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetBatchSizePercentage"></a>

```csharp
private void ResetBatchSizePercentage()
```

##### `ResetCronExpression` <a name="ResetCronExpression" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetCronExpression"></a>

```csharp
private void ResetCronExpression()
```

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetFrequency"></a>

```csharp
private void ResetFrequency()
```

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetGracePeriod"></a>

```csharp
private void ResetGracePeriod()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetMaxCapacity"></a>

```csharp
private void ResetMaxCapacity()
```

##### `ResetMinCapacity` <a name="ResetMinCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetMinCapacity"></a>

```csharp
private void ResetMinCapacity()
```

##### `ResetScaleMaxCapacity` <a name="ResetScaleMaxCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetScaleMaxCapacity"></a>

```csharp
private void ResetScaleMaxCapacity()
```

##### `ResetScaleMinCapacity` <a name="ResetScaleMinCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetScaleMinCapacity"></a>

```csharp
private void ResetScaleMinCapacity()
```

##### `ResetScaleTargetCapacity` <a name="ResetScaleTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetScaleTargetCapacity"></a>

```csharp
private void ResetScaleTargetCapacity()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

##### `ResetTargetCapacity` <a name="ResetTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetTargetCapacity"></a>

```csharp
private void ResetTargetCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustmentInput">AdjustmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustmentPercentageInput">AdjustmentPercentageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.batchSizePercentageInput">BatchSizePercentageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.gracePeriodInput">GracePeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.minCapacityInput">MinCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMaxCapacityInput">ScaleMaxCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMinCapacityInput">ScaleMinCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleTargetCapacityInput">ScaleTargetCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.targetCapacityInput">TargetCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.taskTypeInput">TaskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustment">Adjustment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustmentPercentage">AdjustmentPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.gracePeriod">GracePeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.minCapacity">MinCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMaxCapacity">ScaleMaxCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMinCapacity">ScaleMinCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleTargetCapacity">ScaleTargetCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.targetCapacity">TargetCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.taskType">TaskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdjustmentInput`<sup>Optional</sup> <a name="AdjustmentInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustmentInput"></a>

```csharp
public string AdjustmentInput { get; }
```

- *Type:* string

---

##### `AdjustmentPercentageInput`<sup>Optional</sup> <a name="AdjustmentPercentageInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustmentPercentageInput"></a>

```csharp
public string AdjustmentPercentageInput { get; }
```

- *Type:* string

---

##### `BatchSizePercentageInput`<sup>Optional</sup> <a name="BatchSizePercentageInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.batchSizePercentageInput"></a>

```csharp
public string BatchSizePercentageInput { get; }
```

- *Type:* string

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.cronExpressionInput"></a>

```csharp
public string CronExpressionInput { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.gracePeriodInput"></a>

```csharp
public string GracePeriodInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.maxCapacityInput"></a>

```csharp
public string MaxCapacityInput { get; }
```

- *Type:* string

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.minCapacityInput"></a>

```csharp
public string MinCapacityInput { get; }
```

- *Type:* string

---

##### `ScaleMaxCapacityInput`<sup>Optional</sup> <a name="ScaleMaxCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMaxCapacityInput"></a>

```csharp
public string ScaleMaxCapacityInput { get; }
```

- *Type:* string

---

##### `ScaleMinCapacityInput`<sup>Optional</sup> <a name="ScaleMinCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMinCapacityInput"></a>

```csharp
public string ScaleMinCapacityInput { get; }
```

- *Type:* string

---

##### `ScaleTargetCapacityInput`<sup>Optional</sup> <a name="ScaleTargetCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleTargetCapacityInput"></a>

```csharp
public string ScaleTargetCapacityInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TargetCapacityInput`<sup>Optional</sup> <a name="TargetCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.targetCapacityInput"></a>

```csharp
public string TargetCapacityInput { get; }
```

- *Type:* string

---

##### `TaskTypeInput`<sup>Optional</sup> <a name="TaskTypeInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.taskTypeInput"></a>

```csharp
public string TaskTypeInput { get; }
```

- *Type:* string

---

##### `Adjustment`<sup>Required</sup> <a name="Adjustment" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustment"></a>

```csharp
public string Adjustment { get; }
```

- *Type:* string

---

##### `AdjustmentPercentage`<sup>Required</sup> <a name="AdjustmentPercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustmentPercentage"></a>

```csharp
public string AdjustmentPercentage { get; }
```

- *Type:* string

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.batchSizePercentage"></a>

```csharp
public string BatchSizePercentage { get; }
```

- *Type:* string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.gracePeriod"></a>

```csharp
public string GracePeriod { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.maxCapacity"></a>

```csharp
public string MaxCapacity { get; }
```

- *Type:* string

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.minCapacity"></a>

```csharp
public string MinCapacity { get; }
```

- *Type:* string

---

##### `ScaleMaxCapacity`<sup>Required</sup> <a name="ScaleMaxCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMaxCapacity"></a>

```csharp
public string ScaleMaxCapacity { get; }
```

- *Type:* string

---

##### `ScaleMinCapacity`<sup>Required</sup> <a name="ScaleMinCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMinCapacity"></a>

```csharp
public string ScaleMinCapacity { get; }
```

- *Type:* string

---

##### `ScaleTargetCapacity`<sup>Required</sup> <a name="ScaleTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleTargetCapacity"></a>

```csharp
public string ScaleTargetCapacity { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `TargetCapacity`<sup>Required</sup> <a name="TargetCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.targetCapacity"></a>

```csharp
public string TargetCapacity { get; }
```

- *Type:* string

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.taskType"></a>

```csharp
public string TaskType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



