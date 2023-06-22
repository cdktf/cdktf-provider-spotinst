# `spotinst_elastigroup_azure`

Refer to the Terraform Registory for docs: [`spotinst_elastigroup_azure`](https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure).

# `elastigroupAzure` Submodule <a name="`elastigroupAzure` Submodule" id="@cdktf/provider-spotinst.elastigroupAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastigroupAzure <a name="ElastigroupAzure" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure spotinst_elastigroup_azure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzure(Construct Scope, string Id, ElastigroupAzureConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig">ElastigroupAzureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig">ElastigroupAzureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putIntegrationKubernetes">PutIntegrationKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putIntegrationMultaiRuntime">PutIntegrationMultaiRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLoadBalancers">PutLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLogin">PutLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putManagedServiceIdentities">PutManagedServiceIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScalingDownPolicy">PutScalingDownPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScalingUpPolicy">PutScalingUpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScheduledTask">PutScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putStrategy">PutStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putUpdatePolicy">PutUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetCustomData">ResetCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetDesiredCapacity">ResetDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetIntegrationKubernetes">ResetIntegrationKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetIntegrationMultaiRuntime">ResetIntegrationMultaiRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetLoadBalancers">ResetLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetLogin">ResetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetManagedServiceIdentities">ResetManagedServiceIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetMaxSize">ResetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetMinSize">ResetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetScalingDownPolicy">ResetScalingDownPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetScalingUpPolicy">ResetScalingUpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetScheduledTask">ResetScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetShutdownScript">ResetShutdownScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetUpdatePolicy">ResetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetUserData">ResetUserData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putHealthCheck"></a>

```csharp
private void PutHealthCheck(ElastigroupAzureHealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a>

---

##### `PutImage` <a name="PutImage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putImage"></a>

```csharp
private void PutImage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putImage.parameter.value"></a>

- *Type:* object

---

##### `PutIntegrationKubernetes` <a name="PutIntegrationKubernetes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putIntegrationKubernetes"></a>

```csharp
private void PutIntegrationKubernetes(ElastigroupAzureIntegrationKubernetes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putIntegrationKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a>

---

##### `PutIntegrationMultaiRuntime` <a name="PutIntegrationMultaiRuntime" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putIntegrationMultaiRuntime"></a>

```csharp
private void PutIntegrationMultaiRuntime(ElastigroupAzureIntegrationMultaiRuntime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putIntegrationMultaiRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a>

---

##### `PutLoadBalancers` <a name="PutLoadBalancers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLoadBalancers"></a>

```csharp
private void PutLoadBalancers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLoadBalancers.parameter.value"></a>

- *Type:* object

---

##### `PutLogin` <a name="PutLogin" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLogin"></a>

```csharp
private void PutLogin(ElastigroupAzureLogin Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putLogin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a>

---

##### `PutManagedServiceIdentities` <a name="PutManagedServiceIdentities" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putManagedServiceIdentities"></a>

```csharp
private void PutManagedServiceIdentities(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putManagedServiceIdentities.parameter.value"></a>

- *Type:* object

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putNetwork"></a>

```csharp
private void PutNetwork(ElastigroupAzureNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a>

---

##### `PutScalingDownPolicy` <a name="PutScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScalingDownPolicy"></a>

```csharp
private void PutScalingDownPolicy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScalingDownPolicy.parameter.value"></a>

- *Type:* object

---

##### `PutScalingUpPolicy` <a name="PutScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScalingUpPolicy"></a>

```csharp
private void PutScalingUpPolicy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScalingUpPolicy.parameter.value"></a>

- *Type:* object

---

##### `PutScheduledTask` <a name="PutScheduledTask" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScheduledTask"></a>

```csharp
private void PutScheduledTask(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putScheduledTask.parameter.value"></a>

- *Type:* object

---

##### `PutStrategy` <a name="PutStrategy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putStrategy"></a>

```csharp
private void PutStrategy(ElastigroupAzureStrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a>

---

##### `PutUpdatePolicy` <a name="PutUpdatePolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putUpdatePolicy"></a>

```csharp
private void PutUpdatePolicy(ElastigroupAzureUpdatePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a>

---

##### `ResetCustomData` <a name="ResetCustomData" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetCustomData"></a>

```csharp
private void ResetCustomData()
```

##### `ResetDesiredCapacity` <a name="ResetDesiredCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetDesiredCapacity"></a>

```csharp
private void ResetDesiredCapacity()
```

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetHealthCheck"></a>

```csharp
private void ResetHealthCheck()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetIntegrationKubernetes` <a name="ResetIntegrationKubernetes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetIntegrationKubernetes"></a>

```csharp
private void ResetIntegrationKubernetes()
```

##### `ResetIntegrationMultaiRuntime` <a name="ResetIntegrationMultaiRuntime" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetIntegrationMultaiRuntime"></a>

```csharp
private void ResetIntegrationMultaiRuntime()
```

##### `ResetLoadBalancers` <a name="ResetLoadBalancers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetLoadBalancers"></a>

```csharp
private void ResetLoadBalancers()
```

##### `ResetLogin` <a name="ResetLogin" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetLogin"></a>

```csharp
private void ResetLogin()
```

##### `ResetManagedServiceIdentities` <a name="ResetManagedServiceIdentities" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetManagedServiceIdentities"></a>

```csharp
private void ResetManagedServiceIdentities()
```

##### `ResetMaxSize` <a name="ResetMaxSize" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetMaxSize"></a>

```csharp
private void ResetMaxSize()
```

##### `ResetMinSize` <a name="ResetMinSize" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetMinSize"></a>

```csharp
private void ResetMinSize()
```

##### `ResetScalingDownPolicy` <a name="ResetScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetScalingDownPolicy"></a>

```csharp
private void ResetScalingDownPolicy()
```

##### `ResetScalingUpPolicy` <a name="ResetScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetScalingUpPolicy"></a>

```csharp
private void ResetScalingUpPolicy()
```

##### `ResetScheduledTask` <a name="ResetScheduledTask" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetScheduledTask"></a>

```csharp
private void ResetScheduledTask()
```

##### `ResetShutdownScript` <a name="ResetShutdownScript" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetShutdownScript"></a>

```csharp
private void ResetShutdownScript()
```

##### `ResetUpdatePolicy` <a name="ResetUpdatePolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetUpdatePolicy"></a>

```csharp
private void ResetUpdatePolicy()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.resetUserData"></a>

```csharp
private void ResetUserData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

ElastigroupAzure.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

ElastigroupAzure.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

ElastigroupAzure.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference">ElastigroupAzureHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.image">Image</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList">ElastigroupAzureImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationKubernetes">IntegrationKubernetes</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference">ElastigroupAzureIntegrationKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationMultaiRuntime">IntegrationMultaiRuntime</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference">ElastigroupAzureIntegrationMultaiRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.loadBalancers">LoadBalancers</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList">ElastigroupAzureLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.login">Login</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference">ElastigroupAzureLoginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.managedServiceIdentities">ManagedServiceIdentities</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList">ElastigroupAzureManagedServiceIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.network">Network</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference">ElastigroupAzureNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingDownPolicy">ScalingDownPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList">ElastigroupAzureScalingDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingUpPolicy">ScalingUpPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList">ElastigroupAzureScalingUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scheduledTask">ScheduledTask</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList">ElastigroupAzureScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference">ElastigroupAzureStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference">ElastigroupAzureUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.customDataInput">CustomDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.desiredCapacityInput">DesiredCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.healthCheckInput">HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.imageInput">ImageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationKubernetesInput">IntegrationKubernetesInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationMultaiRuntimeInput">IntegrationMultaiRuntimeInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.loadBalancersInput">LoadBalancersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.loginInput">LoginInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.lowPrioritySizesInput">LowPrioritySizesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.managedServiceIdentitiesInput">ManagedServiceIdentitiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.maxSizeInput">MaxSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.minSizeInput">MinSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.odSizesInput">OdSizesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.productInput">ProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingDownPolicyInput">ScalingDownPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingUpPolicyInput">ScalingUpPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scheduledTaskInput">ScheduledTaskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.shutdownScriptInput">ShutdownScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.strategyInput">StrategyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.updatePolicyInput">UpdatePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.userDataInput">UserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.customData">CustomData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.desiredCapacity">DesiredCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.lowPrioritySizes">LowPrioritySizes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.maxSize">MaxSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.minSize">MinSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.odSizes">OdSizes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.product">Product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.shutdownScript">ShutdownScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.userData">UserData</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.healthCheck"></a>

```csharp
public ElastigroupAzureHealthCheckOutputReference HealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference">ElastigroupAzureHealthCheckOutputReference</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.image"></a>

```csharp
public ElastigroupAzureImageList Image { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList">ElastigroupAzureImageList</a>

---

##### `IntegrationKubernetes`<sup>Required</sup> <a name="IntegrationKubernetes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationKubernetes"></a>

```csharp
public ElastigroupAzureIntegrationKubernetesOutputReference IntegrationKubernetes { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference">ElastigroupAzureIntegrationKubernetesOutputReference</a>

---

##### `IntegrationMultaiRuntime`<sup>Required</sup> <a name="IntegrationMultaiRuntime" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationMultaiRuntime"></a>

```csharp
public ElastigroupAzureIntegrationMultaiRuntimeOutputReference IntegrationMultaiRuntime { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference">ElastigroupAzureIntegrationMultaiRuntimeOutputReference</a>

---

##### `LoadBalancers`<sup>Required</sup> <a name="LoadBalancers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.loadBalancers"></a>

```csharp
public ElastigroupAzureLoadBalancersList LoadBalancers { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList">ElastigroupAzureLoadBalancersList</a>

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.login"></a>

```csharp
public ElastigroupAzureLoginOutputReference Login { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference">ElastigroupAzureLoginOutputReference</a>

---

##### `ManagedServiceIdentities`<sup>Required</sup> <a name="ManagedServiceIdentities" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.managedServiceIdentities"></a>

```csharp
public ElastigroupAzureManagedServiceIdentitiesList ManagedServiceIdentities { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList">ElastigroupAzureManagedServiceIdentitiesList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.network"></a>

```csharp
public ElastigroupAzureNetworkOutputReference Network { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference">ElastigroupAzureNetworkOutputReference</a>

---

##### `ScalingDownPolicy`<sup>Required</sup> <a name="ScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingDownPolicy"></a>

```csharp
public ElastigroupAzureScalingDownPolicyList ScalingDownPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList">ElastigroupAzureScalingDownPolicyList</a>

---

##### `ScalingUpPolicy`<sup>Required</sup> <a name="ScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingUpPolicy"></a>

```csharp
public ElastigroupAzureScalingUpPolicyList ScalingUpPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList">ElastigroupAzureScalingUpPolicyList</a>

---

##### `ScheduledTask`<sup>Required</sup> <a name="ScheduledTask" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scheduledTask"></a>

```csharp
public ElastigroupAzureScheduledTaskList ScheduledTask { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList">ElastigroupAzureScheduledTaskList</a>

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.strategy"></a>

```csharp
public ElastigroupAzureStrategyOutputReference Strategy { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference">ElastigroupAzureStrategyOutputReference</a>

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.updatePolicy"></a>

```csharp
public ElastigroupAzureUpdatePolicyOutputReference UpdatePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference">ElastigroupAzureUpdatePolicyOutputReference</a>

---

##### `CustomDataInput`<sup>Optional</sup> <a name="CustomDataInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.customDataInput"></a>

```csharp
public string CustomDataInput { get; }
```

- *Type:* string

---

##### `DesiredCapacityInput`<sup>Optional</sup> <a name="DesiredCapacityInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.desiredCapacityInput"></a>

```csharp
public double DesiredCapacityInput { get; }
```

- *Type:* double

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.healthCheckInput"></a>

```csharp
public ElastigroupAzureHealthCheck HealthCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.imageInput"></a>

```csharp
public object ImageInput { get; }
```

- *Type:* object

---

##### `IntegrationKubernetesInput`<sup>Optional</sup> <a name="IntegrationKubernetesInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationKubernetesInput"></a>

```csharp
public ElastigroupAzureIntegrationKubernetes IntegrationKubernetesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a>

---

##### `IntegrationMultaiRuntimeInput`<sup>Optional</sup> <a name="IntegrationMultaiRuntimeInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.integrationMultaiRuntimeInput"></a>

```csharp
public ElastigroupAzureIntegrationMultaiRuntime IntegrationMultaiRuntimeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a>

---

##### `LoadBalancersInput`<sup>Optional</sup> <a name="LoadBalancersInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.loadBalancersInput"></a>

```csharp
public object LoadBalancersInput { get; }
```

- *Type:* object

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.loginInput"></a>

```csharp
public ElastigroupAzureLogin LoginInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a>

---

##### `LowPrioritySizesInput`<sup>Optional</sup> <a name="LowPrioritySizesInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.lowPrioritySizesInput"></a>

```csharp
public string[] LowPrioritySizesInput { get; }
```

- *Type:* string[]

---

##### `ManagedServiceIdentitiesInput`<sup>Optional</sup> <a name="ManagedServiceIdentitiesInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.managedServiceIdentitiesInput"></a>

```csharp
public object ManagedServiceIdentitiesInput { get; }
```

- *Type:* object

---

##### `MaxSizeInput`<sup>Optional</sup> <a name="MaxSizeInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.maxSizeInput"></a>

```csharp
public double MaxSizeInput { get; }
```

- *Type:* double

---

##### `MinSizeInput`<sup>Optional</sup> <a name="MinSizeInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.minSizeInput"></a>

```csharp
public double MinSizeInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.networkInput"></a>

```csharp
public ElastigroupAzureNetwork NetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a>

---

##### `OdSizesInput`<sup>Optional</sup> <a name="OdSizesInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.odSizesInput"></a>

```csharp
public string[] OdSizesInput { get; }
```

- *Type:* string[]

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.productInput"></a>

```csharp
public string ProductInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ScalingDownPolicyInput`<sup>Optional</sup> <a name="ScalingDownPolicyInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingDownPolicyInput"></a>

```csharp
public object ScalingDownPolicyInput { get; }
```

- *Type:* object

---

##### `ScalingUpPolicyInput`<sup>Optional</sup> <a name="ScalingUpPolicyInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scalingUpPolicyInput"></a>

```csharp
public object ScalingUpPolicyInput { get; }
```

- *Type:* object

---

##### `ScheduledTaskInput`<sup>Optional</sup> <a name="ScheduledTaskInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.scheduledTaskInput"></a>

```csharp
public object ScheduledTaskInput { get; }
```

- *Type:* object

---

##### `ShutdownScriptInput`<sup>Optional</sup> <a name="ShutdownScriptInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.shutdownScriptInput"></a>

```csharp
public string ShutdownScriptInput { get; }
```

- *Type:* string

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.strategyInput"></a>

```csharp
public ElastigroupAzureStrategy StrategyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a>

---

##### `UpdatePolicyInput`<sup>Optional</sup> <a name="UpdatePolicyInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.updatePolicyInput"></a>

```csharp
public ElastigroupAzureUpdatePolicy UpdatePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a>

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.userDataInput"></a>

```csharp
public string UserDataInput { get; }
```

- *Type:* string

---

##### `CustomData`<sup>Required</sup> <a name="CustomData" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.customData"></a>

```csharp
public string CustomData { get; }
```

- *Type:* string

---

##### `DesiredCapacity`<sup>Required</sup> <a name="DesiredCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.desiredCapacity"></a>

```csharp
public double DesiredCapacity { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LowPrioritySizes`<sup>Required</sup> <a name="LowPrioritySizes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.lowPrioritySizes"></a>

```csharp
public string[] LowPrioritySizes { get; }
```

- *Type:* string[]

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.maxSize"></a>

```csharp
public double MaxSize { get; }
```

- *Type:* double

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.minSize"></a>

```csharp
public double MinSize { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OdSizes`<sup>Required</sup> <a name="OdSizes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.odSizes"></a>

```csharp
public string[] OdSizes { get; }
```

- *Type:* string[]

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.product"></a>

```csharp
public string Product { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ShutdownScript`<sup>Required</sup> <a name="ShutdownScript" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.shutdownScript"></a>

```csharp
public string ShutdownScript { get; }
```

- *Type:* string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzure.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElastigroupAzureConfig <a name="ElastigroupAzureConfig" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] LowPrioritySizes,
    string Name,
    ElastigroupAzureNetwork Network,
    string[] OdSizes,
    string Product,
    string Region,
    string ResourceGroupName,
    ElastigroupAzureStrategy Strategy,
    string CustomData = null,
    double DesiredCapacity = null,
    ElastigroupAzureHealthCheck HealthCheck = null,
    string Id = null,
    object Image = null,
    ElastigroupAzureIntegrationKubernetes IntegrationKubernetes = null,
    ElastigroupAzureIntegrationMultaiRuntime IntegrationMultaiRuntime = null,
    object LoadBalancers = null,
    ElastigroupAzureLogin Login = null,
    object ManagedServiceIdentities = null,
    double MaxSize = null,
    double MinSize = null,
    object ScalingDownPolicy = null,
    object ScalingUpPolicy = null,
    object ScheduledTask = null,
    string ShutdownScript = null,
    ElastigroupAzureUpdatePolicy UpdatePolicy = null,
    string UserData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.lowPrioritySizes">LowPrioritySizes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#low_priority_sizes ElastigroupAzure#low_priority_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.network">Network</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.odSizes">OdSizes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#od_sizes ElastigroupAzure#od_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.product">Product</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#product ElastigroupAzure#product}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#region ElastigroupAzure#region}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.customData">CustomData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#custom_data ElastigroupAzure#custom_data}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.desiredCapacity">DesiredCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#desired_capacity ElastigroupAzure#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#id ElastigroupAzure#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.image">Image</a></code> | <code>object</code> | image block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.integrationKubernetes">IntegrationKubernetes</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a></code> | integration_kubernetes block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.integrationMultaiRuntime">IntegrationMultaiRuntime</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a></code> | integration_multai_runtime block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.loadBalancers">LoadBalancers</a></code> | <code>object</code> | load_balancers block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.login">Login</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a></code> | login block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.managedServiceIdentities">ManagedServiceIdentities</a></code> | <code>object</code> | managed_service_identities block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.maxSize">MaxSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#max_size ElastigroupAzure#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.minSize">MinSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#min_size ElastigroupAzure#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.scalingDownPolicy">ScalingDownPolicy</a></code> | <code>object</code> | scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.scalingUpPolicy">ScalingUpPolicy</a></code> | <code>object</code> | scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.scheduledTask">ScheduledTask</a></code> | <code>object</code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.shutdownScript">ShutdownScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#shutdown_script ElastigroupAzure#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.userData">UserData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#user_data ElastigroupAzure#user_data}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LowPrioritySizes`<sup>Required</sup> <a name="LowPrioritySizes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.lowPrioritySizes"></a>

```csharp
public string[] LowPrioritySizes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#low_priority_sizes ElastigroupAzure#low_priority_sizes}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}.

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.network"></a>

```csharp
public ElastigroupAzureNetwork Network { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#network ElastigroupAzure#network}

---

##### `OdSizes`<sup>Required</sup> <a name="OdSizes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.odSizes"></a>

```csharp
public string[] OdSizes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#od_sizes ElastigroupAzure#od_sizes}.

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.product"></a>

```csharp
public string Product { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#product ElastigroupAzure#product}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#region ElastigroupAzure#region}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}.

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.strategy"></a>

```csharp
public ElastigroupAzureStrategy Strategy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#strategy ElastigroupAzure#strategy}

---

##### `CustomData`<sup>Optional</sup> <a name="CustomData" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.customData"></a>

```csharp
public string CustomData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#custom_data ElastigroupAzure#custom_data}.

---

##### `DesiredCapacity`<sup>Optional</sup> <a name="DesiredCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.desiredCapacity"></a>

```csharp
public double DesiredCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#desired_capacity ElastigroupAzure#desired_capacity}.

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.healthCheck"></a>

```csharp
public ElastigroupAzureHealthCheck HealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#health_check ElastigroupAzure#health_check}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#id ElastigroupAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.image"></a>

```csharp
public object Image { get; set; }
```

- *Type:* object

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#image ElastigroupAzure#image}

---

##### `IntegrationKubernetes`<sup>Optional</sup> <a name="IntegrationKubernetes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.integrationKubernetes"></a>

```csharp
public ElastigroupAzureIntegrationKubernetes IntegrationKubernetes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a>

integration_kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#integration_kubernetes ElastigroupAzure#integration_kubernetes}

---

##### `IntegrationMultaiRuntime`<sup>Optional</sup> <a name="IntegrationMultaiRuntime" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.integrationMultaiRuntime"></a>

```csharp
public ElastigroupAzureIntegrationMultaiRuntime IntegrationMultaiRuntime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a>

integration_multai_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#integration_multai_runtime ElastigroupAzure#integration_multai_runtime}

---

##### `LoadBalancers`<sup>Optional</sup> <a name="LoadBalancers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.loadBalancers"></a>

```csharp
public object LoadBalancers { get; set; }
```

- *Type:* object

load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#load_balancers ElastigroupAzure#load_balancers}

---

##### `Login`<sup>Optional</sup> <a name="Login" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.login"></a>

```csharp
public ElastigroupAzureLogin Login { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a>

login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#login ElastigroupAzure#login}

---

##### `ManagedServiceIdentities`<sup>Optional</sup> <a name="ManagedServiceIdentities" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.managedServiceIdentities"></a>

```csharp
public object ManagedServiceIdentities { get; set; }
```

- *Type:* object

managed_service_identities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#managed_service_identities ElastigroupAzure#managed_service_identities}

---

##### `MaxSize`<sup>Optional</sup> <a name="MaxSize" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.maxSize"></a>

```csharp
public double MaxSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#max_size ElastigroupAzure#max_size}.

---

##### `MinSize`<sup>Optional</sup> <a name="MinSize" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.minSize"></a>

```csharp
public double MinSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#min_size ElastigroupAzure#min_size}.

---

##### `ScalingDownPolicy`<sup>Optional</sup> <a name="ScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.scalingDownPolicy"></a>

```csharp
public object ScalingDownPolicy { get; set; }
```

- *Type:* object

scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scaling_down_policy ElastigroupAzure#scaling_down_policy}

---

##### `ScalingUpPolicy`<sup>Optional</sup> <a name="ScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.scalingUpPolicy"></a>

```csharp
public object ScalingUpPolicy { get; set; }
```

- *Type:* object

scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scaling_up_policy ElastigroupAzure#scaling_up_policy}

---

##### `ScheduledTask`<sup>Optional</sup> <a name="ScheduledTask" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.scheduledTask"></a>

```csharp
public object ScheduledTask { get; set; }
```

- *Type:* object

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scheduled_task ElastigroupAzure#scheduled_task}

---

##### `ShutdownScript`<sup>Optional</sup> <a name="ShutdownScript" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.shutdownScript"></a>

```csharp
public string ShutdownScript { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#shutdown_script ElastigroupAzure#shutdown_script}.

---

##### `UpdatePolicy`<sup>Optional</sup> <a name="UpdatePolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.updatePolicy"></a>

```csharp
public ElastigroupAzureUpdatePolicy UpdatePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#update_policy ElastigroupAzure#update_policy}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureConfig.property.userData"></a>

```csharp
public string UserData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#user_data ElastigroupAzure#user_data}.

---

### ElastigroupAzureHealthCheck <a name="ElastigroupAzureHealthCheck" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureHealthCheck {
    string HealthCheckType,
    object AutoHealing = null,
    double GracePeriod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.property.healthCheckType">HealthCheckType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#health_check_type ElastigroupAzure#health_check_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.property.autoHealing">AutoHealing</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#auto_healing ElastigroupAzure#auto_healing}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.property.gracePeriod">GracePeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}. |

---

##### `HealthCheckType`<sup>Required</sup> <a name="HealthCheckType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.property.healthCheckType"></a>

```csharp
public string HealthCheckType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#health_check_type ElastigroupAzure#health_check_type}.

---

##### `AutoHealing`<sup>Optional</sup> <a name="AutoHealing" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.property.autoHealing"></a>

```csharp
public object AutoHealing { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#auto_healing ElastigroupAzure#auto_healing}.

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck.property.gracePeriod"></a>

```csharp
public double GracePeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}.

---

### ElastigroupAzureImage <a name="ElastigroupAzureImage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureImage {
    object Custom = null,
    object Marketplace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage.property.custom">Custom</a></code> | <code>object</code> | custom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage.property.marketplace">Marketplace</a></code> | <code>object</code> | marketplace block. |

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage.property.custom"></a>

```csharp
public object Custom { get; set; }
```

- *Type:* object

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#custom ElastigroupAzure#custom}

---

##### `Marketplace`<sup>Optional</sup> <a name="Marketplace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImage.property.marketplace"></a>

```csharp
public object Marketplace { get; set; }
```

- *Type:* object

marketplace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#marketplace ElastigroupAzure#marketplace}

---

### ElastigroupAzureImageCustom <a name="ElastigroupAzureImageCustom" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureImageCustom {
    string ImageName,
    string ResourceGroupName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom.property.imageName">ImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#image_name ElastigroupAzure#image_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}. |

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#image_name ElastigroupAzure#image_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustom.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}.

---

### ElastigroupAzureImageMarketplace <a name="ElastigroupAzureImageMarketplace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureImageMarketplace {
    string Offer,
    string Publisher,
    string Sku
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.property.offer">Offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#offer ElastigroupAzure#offer}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#publisher ElastigroupAzure#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#sku ElastigroupAzure#sku}. |

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.property.offer"></a>

```csharp
public string Offer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#offer ElastigroupAzure#offer}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#publisher ElastigroupAzure#publisher}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplace.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#sku ElastigroupAzure#sku}.

---

### ElastigroupAzureIntegrationKubernetes <a name="ElastigroupAzureIntegrationKubernetes" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureIntegrationKubernetes {
    string ClusterIdentifier
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#cluster_identifier ElastigroupAzure#cluster_identifier}. |

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#cluster_identifier ElastigroupAzure#cluster_identifier}.

---

### ElastigroupAzureIntegrationMultaiRuntime <a name="ElastigroupAzureIntegrationMultaiRuntime" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureIntegrationMultaiRuntime {
    string DeploymentId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime.property.deploymentId">DeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#deployment_id ElastigroupAzure#deployment_id}. |

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime.property.deploymentId"></a>

```csharp
public string DeploymentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#deployment_id ElastigroupAzure#deployment_id}.

---

### ElastigroupAzureLoadBalancers <a name="ElastigroupAzureLoadBalancers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureLoadBalancers {
    string Type,
    object AutoWeight = null,
    string BalancerId = null,
    string TargetSetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#type ElastigroupAzure#type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.autoWeight">AutoWeight</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#auto_weight ElastigroupAzure#auto_weight}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.balancerId">BalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#balancer_id ElastigroupAzure#balancer_id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.targetSetId">TargetSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#target_set_id ElastigroupAzure#target_set_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#type ElastigroupAzure#type}.

---

##### `AutoWeight`<sup>Optional</sup> <a name="AutoWeight" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.autoWeight"></a>

```csharp
public object AutoWeight { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#auto_weight ElastigroupAzure#auto_weight}.

---

##### `BalancerId`<sup>Optional</sup> <a name="BalancerId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.balancerId"></a>

```csharp
public string BalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#balancer_id ElastigroupAzure#balancer_id}.

---

##### `TargetSetId`<sup>Optional</sup> <a name="TargetSetId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancers.property.targetSetId"></a>

```csharp
public string TargetSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#target_set_id ElastigroupAzure#target_set_id}.

---

### ElastigroupAzureLogin <a name="ElastigroupAzureLogin" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureLogin {
    string UserName,
    string Password = null,
    string SshPublicKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#user_name ElastigroupAzure#user_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#password ElastigroupAzure#password}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.property.sshPublicKey">SshPublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#ssh_public_key ElastigroupAzure#ssh_public_key}. |

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#user_name ElastigroupAzure#user_name}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#password ElastigroupAzure#password}.

---

##### `SshPublicKey`<sup>Optional</sup> <a name="SshPublicKey" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin.property.sshPublicKey"></a>

```csharp
public string SshPublicKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#ssh_public_key ElastigroupAzure#ssh_public_key}.

---

### ElastigroupAzureManagedServiceIdentities <a name="ElastigroupAzureManagedServiceIdentities" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureManagedServiceIdentities {
    string Name,
    string ResourceGroupName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentities.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}.

---

### ElastigroupAzureNetwork <a name="ElastigroupAzureNetwork" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureNetwork {
    string ResourceGroupName,
    string SubnetName,
    string VirtualNetworkName,
    object AdditionalIpConfigs = null,
    object AssignPublicIp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.subnetName">SubnetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#subnet_name ElastigroupAzure#subnet_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.virtualNetworkName">VirtualNetworkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#virtual_network_name ElastigroupAzure#virtual_network_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.additionalIpConfigs">AdditionalIpConfigs</a></code> | <code>object</code> | additional_ip_configs block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.assignPublicIp">AssignPublicIp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#assign_public_ip ElastigroupAzure#assign_public_ip}. |

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}.

---

##### `SubnetName`<sup>Required</sup> <a name="SubnetName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.subnetName"></a>

```csharp
public string SubnetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#subnet_name ElastigroupAzure#subnet_name}.

---

##### `VirtualNetworkName`<sup>Required</sup> <a name="VirtualNetworkName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.virtualNetworkName"></a>

```csharp
public string VirtualNetworkName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#virtual_network_name ElastigroupAzure#virtual_network_name}.

---

##### `AdditionalIpConfigs`<sup>Optional</sup> <a name="AdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.additionalIpConfigs"></a>

```csharp
public object AdditionalIpConfigs { get; set; }
```

- *Type:* object

additional_ip_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#additional_ip_configs ElastigroupAzure#additional_ip_configs}

---

##### `AssignPublicIp`<sup>Optional</sup> <a name="AssignPublicIp" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork.property.assignPublicIp"></a>

```csharp
public object AssignPublicIp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#assign_public_ip ElastigroupAzure#assign_public_ip}.

---

### ElastigroupAzureNetworkAdditionalIpConfigs <a name="ElastigroupAzureNetworkAdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureNetworkAdditionalIpConfigs {
    string Name,
    string PrivateIpVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs.property.privateIpVersion">PrivateIpVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#private_ip_version ElastigroupAzure#private_ip_version}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}.

---

##### `PrivateIpVersion`<sup>Optional</sup> <a name="PrivateIpVersion" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigs.property.privateIpVersion"></a>

```csharp
public string PrivateIpVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#private_ip_version ElastigroupAzure#private_ip_version}.

---

### ElastigroupAzureScalingDownPolicy <a name="ElastigroupAzureScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureScalingDownPolicy {
    string MetricName,
    string Namespace,
    string PolicyName,
    double Threshold,
    string ActionType = null,
    string Adjustment = null,
    double Cooldown = null,
    object Dimensions = null,
    double EvaluationPeriods = null,
    string Maximum = null,
    string MaxTargetCapacity = null,
    string Minimum = null,
    string MinTargetCapacity = null,
    string Operator = null,
    double Period = null,
    string Statistic = null,
    string Target = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.metricName">MetricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#metric_name ElastigroupAzure#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#namespace ElastigroupAzure#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.policyName">PolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#policy_name ElastigroupAzure#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.threshold">Threshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#threshold ElastigroupAzure#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.actionType">ActionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#action_type ElastigroupAzure#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.adjustment">Adjustment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#adjustment ElastigroupAzure#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.cooldown">Cooldown</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#cooldown ElastigroupAzure#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.dimensions">Dimensions</a></code> | <code>object</code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#evaluation_periods ElastigroupAzure#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.maximum">Maximum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#maximum ElastigroupAzure#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.maxTargetCapacity">MaxTargetCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#max_target_capacity ElastigroupAzure#max_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.minimum">Minimum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#minimum ElastigroupAzure#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.minTargetCapacity">MinTargetCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#min_target_capacity ElastigroupAzure#min_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#operator ElastigroupAzure#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.period">Period</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#period ElastigroupAzure#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.statistic">Statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#statistic ElastigroupAzure#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#target ElastigroupAzure#target}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#unit ElastigroupAzure#unit}. |

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#metric_name ElastigroupAzure#metric_name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#namespace ElastigroupAzure#namespace}.

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.policyName"></a>

```csharp
public string PolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#policy_name ElastigroupAzure#policy_name}.

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#threshold ElastigroupAzure#threshold}.

---

##### `ActionType`<sup>Optional</sup> <a name="ActionType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.actionType"></a>

```csharp
public string ActionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#action_type ElastigroupAzure#action_type}.

---

##### `Adjustment`<sup>Optional</sup> <a name="Adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.adjustment"></a>

```csharp
public string Adjustment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#adjustment ElastigroupAzure#adjustment}.

---

##### `Cooldown`<sup>Optional</sup> <a name="Cooldown" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.cooldown"></a>

```csharp
public double Cooldown { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#cooldown ElastigroupAzure#cooldown}.

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.dimensions"></a>

```csharp
public object Dimensions { get; set; }
```

- *Type:* object

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#dimensions ElastigroupAzure#dimensions}

---

##### `EvaluationPeriods`<sup>Optional</sup> <a name="EvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#evaluation_periods ElastigroupAzure#evaluation_periods}.

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.maximum"></a>

```csharp
public string Maximum { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#maximum ElastigroupAzure#maximum}.

---

##### `MaxTargetCapacity`<sup>Optional</sup> <a name="MaxTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.maxTargetCapacity"></a>

```csharp
public string MaxTargetCapacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#max_target_capacity ElastigroupAzure#max_target_capacity}.

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.minimum"></a>

```csharp
public string Minimum { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#minimum ElastigroupAzure#minimum}.

---

##### `MinTargetCapacity`<sup>Optional</sup> <a name="MinTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.minTargetCapacity"></a>

```csharp
public string MinTargetCapacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#min_target_capacity ElastigroupAzure#min_target_capacity}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#operator ElastigroupAzure#operator}.

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.period"></a>

```csharp
public double Period { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#period ElastigroupAzure#period}.

---

##### `Statistic`<sup>Optional</sup> <a name="Statistic" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.statistic"></a>

```csharp
public string Statistic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#statistic ElastigroupAzure#statistic}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#target ElastigroupAzure#target}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicy.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#unit ElastigroupAzure#unit}.

---

### ElastigroupAzureScalingDownPolicyDimensions <a name="ElastigroupAzureScalingDownPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureScalingDownPolicyDimensions {
    string Name,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#value ElastigroupAzure#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensions.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#value ElastigroupAzure#value}.

---

### ElastigroupAzureScalingUpPolicy <a name="ElastigroupAzureScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureScalingUpPolicy {
    string MetricName,
    string Namespace,
    string PolicyName,
    double Threshold,
    string ActionType = null,
    string Adjustment = null,
    double Cooldown = null,
    object Dimensions = null,
    double EvaluationPeriods = null,
    string Maximum = null,
    string MaxTargetCapacity = null,
    string Minimum = null,
    string MinTargetCapacity = null,
    string Operator = null,
    double Period = null,
    string Statistic = null,
    string Target = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.metricName">MetricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#metric_name ElastigroupAzure#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#namespace ElastigroupAzure#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.policyName">PolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#policy_name ElastigroupAzure#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.threshold">Threshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#threshold ElastigroupAzure#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.actionType">ActionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#action_type ElastigroupAzure#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.adjustment">Adjustment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#adjustment ElastigroupAzure#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.cooldown">Cooldown</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#cooldown ElastigroupAzure#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.dimensions">Dimensions</a></code> | <code>object</code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#evaluation_periods ElastigroupAzure#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.maximum">Maximum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#maximum ElastigroupAzure#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.maxTargetCapacity">MaxTargetCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#max_target_capacity ElastigroupAzure#max_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.minimum">Minimum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#minimum ElastigroupAzure#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.minTargetCapacity">MinTargetCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#min_target_capacity ElastigroupAzure#min_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#operator ElastigroupAzure#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.period">Period</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#period ElastigroupAzure#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.statistic">Statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#statistic ElastigroupAzure#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#target ElastigroupAzure#target}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#unit ElastigroupAzure#unit}. |

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#metric_name ElastigroupAzure#metric_name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#namespace ElastigroupAzure#namespace}.

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.policyName"></a>

```csharp
public string PolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#policy_name ElastigroupAzure#policy_name}.

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#threshold ElastigroupAzure#threshold}.

---

##### `ActionType`<sup>Optional</sup> <a name="ActionType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.actionType"></a>

```csharp
public string ActionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#action_type ElastigroupAzure#action_type}.

---

##### `Adjustment`<sup>Optional</sup> <a name="Adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.adjustment"></a>

```csharp
public string Adjustment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#adjustment ElastigroupAzure#adjustment}.

---

##### `Cooldown`<sup>Optional</sup> <a name="Cooldown" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.cooldown"></a>

```csharp
public double Cooldown { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#cooldown ElastigroupAzure#cooldown}.

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.dimensions"></a>

```csharp
public object Dimensions { get; set; }
```

- *Type:* object

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#dimensions ElastigroupAzure#dimensions}

---

##### `EvaluationPeriods`<sup>Optional</sup> <a name="EvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#evaluation_periods ElastigroupAzure#evaluation_periods}.

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.maximum"></a>

```csharp
public string Maximum { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#maximum ElastigroupAzure#maximum}.

---

##### `MaxTargetCapacity`<sup>Optional</sup> <a name="MaxTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.maxTargetCapacity"></a>

```csharp
public string MaxTargetCapacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#max_target_capacity ElastigroupAzure#max_target_capacity}.

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.minimum"></a>

```csharp
public string Minimum { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#minimum ElastigroupAzure#minimum}.

---

##### `MinTargetCapacity`<sup>Optional</sup> <a name="MinTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.minTargetCapacity"></a>

```csharp
public string MinTargetCapacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#min_target_capacity ElastigroupAzure#min_target_capacity}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#operator ElastigroupAzure#operator}.

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.period"></a>

```csharp
public double Period { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#period ElastigroupAzure#period}.

---

##### `Statistic`<sup>Optional</sup> <a name="Statistic" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.statistic"></a>

```csharp
public string Statistic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#statistic ElastigroupAzure#statistic}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#target ElastigroupAzure#target}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicy.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#unit ElastigroupAzure#unit}.

---

### ElastigroupAzureScalingUpPolicyDimensions <a name="ElastigroupAzureScalingUpPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureScalingUpPolicyDimensions {
    string Name,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#value ElastigroupAzure#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#name ElastigroupAzure#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensions.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#value ElastigroupAzure#value}.

---

### ElastigroupAzureScheduledTask <a name="ElastigroupAzureScheduledTask" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureScheduledTask {
    string CronExpression,
    string TaskType,
    string Adjustment = null,
    string AdjustmentPercentage = null,
    string BatchSizePercentage = null,
    string GracePeriod = null,
    object IsEnabled = null,
    string ScaleMaxCapacity = null,
    string ScaleMinCapacity = null,
    string ScaleTargetCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.cronExpression">CronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#cron_expression ElastigroupAzure#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.taskType">TaskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#task_type ElastigroupAzure#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.adjustment">Adjustment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#adjustment ElastigroupAzure#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.adjustmentPercentage">AdjustmentPercentage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#adjustment_percentage ElastigroupAzure#adjustment_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#batch_size_percentage ElastigroupAzure#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.gracePeriod">GracePeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#is_enabled ElastigroupAzure#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.scaleMaxCapacity">ScaleMaxCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scale_max_capacity ElastigroupAzure#scale_max_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.scaleMinCapacity">ScaleMinCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scale_min_capacity ElastigroupAzure#scale_min_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.scaleTargetCapacity">ScaleTargetCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scale_target_capacity ElastigroupAzure#scale_target_capacity}. |

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.cronExpression"></a>

```csharp
public string CronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#cron_expression ElastigroupAzure#cron_expression}.

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.taskType"></a>

```csharp
public string TaskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#task_type ElastigroupAzure#task_type}.

---

##### `Adjustment`<sup>Optional</sup> <a name="Adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.adjustment"></a>

```csharp
public string Adjustment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#adjustment ElastigroupAzure#adjustment}.

---

##### `AdjustmentPercentage`<sup>Optional</sup> <a name="AdjustmentPercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.adjustmentPercentage"></a>

```csharp
public string AdjustmentPercentage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#adjustment_percentage ElastigroupAzure#adjustment_percentage}.

---

##### `BatchSizePercentage`<sup>Optional</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.batchSizePercentage"></a>

```csharp
public string BatchSizePercentage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#batch_size_percentage ElastigroupAzure#batch_size_percentage}.

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.gracePeriod"></a>

```csharp
public string GracePeriod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#is_enabled ElastigroupAzure#is_enabled}.

---

##### `ScaleMaxCapacity`<sup>Optional</sup> <a name="ScaleMaxCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.scaleMaxCapacity"></a>

```csharp
public string ScaleMaxCapacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scale_max_capacity ElastigroupAzure#scale_max_capacity}.

---

##### `ScaleMinCapacity`<sup>Optional</sup> <a name="ScaleMinCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.scaleMinCapacity"></a>

```csharp
public string ScaleMinCapacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scale_min_capacity ElastigroupAzure#scale_min_capacity}.

---

##### `ScaleTargetCapacity`<sup>Optional</sup> <a name="ScaleTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTask.property.scaleTargetCapacity"></a>

```csharp
public string ScaleTargetCapacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#scale_target_capacity ElastigroupAzure#scale_target_capacity}.

---

### ElastigroupAzureStrategy <a name="ElastigroupAzureStrategy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureStrategy {
    double DrainingTimeout = null,
    double LowPriorityPercentage = null,
    double OdCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.property.drainingTimeout">DrainingTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#draining_timeout ElastigroupAzure#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.property.lowPriorityPercentage">LowPriorityPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#low_priority_percentage ElastigroupAzure#low_priority_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.property.odCount">OdCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#od_count ElastigroupAzure#od_count}. |

---

##### `DrainingTimeout`<sup>Optional</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.property.drainingTimeout"></a>

```csharp
public double DrainingTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#draining_timeout ElastigroupAzure#draining_timeout}.

---

##### `LowPriorityPercentage`<sup>Optional</sup> <a name="LowPriorityPercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.property.lowPriorityPercentage"></a>

```csharp
public double LowPriorityPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#low_priority_percentage ElastigroupAzure#low_priority_percentage}.

---

##### `OdCount`<sup>Optional</sup> <a name="OdCount" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy.property.odCount"></a>

```csharp
public double OdCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#od_count ElastigroupAzure#od_count}.

---

### ElastigroupAzureUpdatePolicy <a name="ElastigroupAzureUpdatePolicy" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureUpdatePolicy {
    object ShouldRoll,
    ElastigroupAzureUpdatePolicyRollConfig RollConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy.property.shouldRoll">ShouldRoll</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#should_roll ElastigroupAzure#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy.property.rollConfig">RollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `ShouldRoll`<sup>Required</sup> <a name="ShouldRoll" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy.property.shouldRoll"></a>

```csharp
public object ShouldRoll { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#should_roll ElastigroupAzure#should_roll}.

---

##### `RollConfig`<sup>Optional</sup> <a name="RollConfig" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy.property.rollConfig"></a>

```csharp
public ElastigroupAzureUpdatePolicyRollConfig RollConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#roll_config ElastigroupAzure#roll_config}

---

### ElastigroupAzureUpdatePolicyRollConfig <a name="ElastigroupAzureUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureUpdatePolicyRollConfig {
    double BatchSizePercentage,
    double GracePeriod = null,
    string HealthCheckType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#batch_size_percentage ElastigroupAzure#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.property.gracePeriod">GracePeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.property.healthCheckType">HealthCheckType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#health_check_type ElastigroupAzure#health_check_type}. |

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```csharp
public double BatchSizePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#batch_size_percentage ElastigroupAzure#batch_size_percentage}.

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.property.gracePeriod"></a>

```csharp
public double GracePeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#grace_period ElastigroupAzure#grace_period}.

---

##### `HealthCheckType`<sup>Optional</sup> <a name="HealthCheckType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig.property.healthCheckType"></a>

```csharp
public string HealthCheckType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.123.0/docs/resources/elastigroup_azure#health_check_type ElastigroupAzure#health_check_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastigroupAzureHealthCheckOutputReference <a name="ElastigroupAzureHealthCheckOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resetAutoHealing">ResetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoHealing` <a name="ResetAutoHealing" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resetAutoHealing"></a>

```csharp
private void ResetAutoHealing()
```

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.resetGracePeriod"></a>

```csharp
private void ResetGracePeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.autoHealingInput">AutoHealingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.gracePeriodInput">GracePeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.healthCheckTypeInput">HealthCheckTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.autoHealing">AutoHealing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.gracePeriod">GracePeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.healthCheckType">HealthCheckType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoHealingInput`<sup>Optional</sup> <a name="AutoHealingInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.autoHealingInput"></a>

```csharp
public object AutoHealingInput { get; }
```

- *Type:* object

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.gracePeriodInput"></a>

```csharp
public double GracePeriodInput { get; }
```

- *Type:* double

---

##### `HealthCheckTypeInput`<sup>Optional</sup> <a name="HealthCheckTypeInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.healthCheckTypeInput"></a>

```csharp
public string HealthCheckTypeInput { get; }
```

- *Type:* string

---

##### `AutoHealing`<sup>Required</sup> <a name="AutoHealing" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.autoHealing"></a>

```csharp
public object AutoHealing { get; }
```

- *Type:* object

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.gracePeriod"></a>

```csharp
public double GracePeriod { get; }
```

- *Type:* double

---

##### `HealthCheckType`<sup>Required</sup> <a name="HealthCheckType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.healthCheckType"></a>

```csharp
public string HealthCheckType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheckOutputReference.property.internalValue"></a>

```csharp
public ElastigroupAzureHealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureHealthCheck">ElastigroupAzureHealthCheck</a>

---


### ElastigroupAzureImageCustomList <a name="ElastigroupAzureImageCustomList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureImageCustomList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.get"></a>

```csharp
private ElastigroupAzureImageCustomOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureImageCustomOutputReference <a name="ElastigroupAzureImageCustomOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureImageCustomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureImageList <a name="ElastigroupAzureImageList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureImageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.get"></a>

```csharp
private ElastigroupAzureImageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureImageMarketplaceList <a name="ElastigroupAzureImageMarketplaceList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureImageMarketplaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.get"></a>

```csharp
private ElastigroupAzureImageMarketplaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureImageMarketplaceOutputReference <a name="ElastigroupAzureImageMarketplaceOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureImageMarketplaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.offerInput">OfferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.offer">Offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.offerInput"></a>

```csharp
public string OfferInput { get; }
```

- *Type:* string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.offer"></a>

```csharp
public string Offer { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureImageOutputReference <a name="ElastigroupAzureImageOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.putCustom">PutCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.putMarketplace">PutMarketplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resetMarketplace">ResetMarketplace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustom` <a name="PutCustom" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.putCustom"></a>

```csharp
private void PutCustom(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.putCustom.parameter.value"></a>

- *Type:* object

---

##### `PutMarketplace` <a name="PutMarketplace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.putMarketplace"></a>

```csharp
private void PutMarketplace(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.putMarketplace.parameter.value"></a>

- *Type:* object

---

##### `ResetCustom` <a name="ResetCustom" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resetCustom"></a>

```csharp
private void ResetCustom()
```

##### `ResetMarketplace` <a name="ResetMarketplace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.resetMarketplace"></a>

```csharp
private void ResetMarketplace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.custom">Custom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList">ElastigroupAzureImageCustomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.marketplace">Marketplace</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList">ElastigroupAzureImageMarketplaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.customInput">CustomInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.marketplaceInput">MarketplaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.custom"></a>

```csharp
public ElastigroupAzureImageCustomList Custom { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageCustomList">ElastigroupAzureImageCustomList</a>

---

##### `Marketplace`<sup>Required</sup> <a name="Marketplace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.marketplace"></a>

```csharp
public ElastigroupAzureImageMarketplaceList Marketplace { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageMarketplaceList">ElastigroupAzureImageMarketplaceList</a>

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.customInput"></a>

```csharp
public object CustomInput { get; }
```

- *Type:* object

---

##### `MarketplaceInput`<sup>Optional</sup> <a name="MarketplaceInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.marketplaceInput"></a>

```csharp
public object MarketplaceInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureImageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureIntegrationKubernetesOutputReference <a name="ElastigroupAzureIntegrationKubernetesOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureIntegrationKubernetesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.clusterIdentifierInput"></a>

```csharp
public string ClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetesOutputReference.property.internalValue"></a>

```csharp
public ElastigroupAzureIntegrationKubernetes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationKubernetes">ElastigroupAzureIntegrationKubernetes</a>

---


### ElastigroupAzureIntegrationMultaiRuntimeOutputReference <a name="ElastigroupAzureIntegrationMultaiRuntimeOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureIntegrationMultaiRuntimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.deploymentIdInput"></a>

```csharp
public string DeploymentIdInput { get; }
```

- *Type:* string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntimeOutputReference.property.internalValue"></a>

```csharp
public ElastigroupAzureIntegrationMultaiRuntime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureIntegrationMultaiRuntime">ElastigroupAzureIntegrationMultaiRuntime</a>

---


### ElastigroupAzureLoadBalancersList <a name="ElastigroupAzureLoadBalancersList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureLoadBalancersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.get"></a>

```csharp
private ElastigroupAzureLoadBalancersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureLoadBalancersOutputReference <a name="ElastigroupAzureLoadBalancersOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureLoadBalancersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resetAutoWeight">ResetAutoWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resetBalancerId">ResetBalancerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resetTargetSetId">ResetTargetSetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoWeight` <a name="ResetAutoWeight" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resetAutoWeight"></a>

```csharp
private void ResetAutoWeight()
```

##### `ResetBalancerId` <a name="ResetBalancerId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resetBalancerId"></a>

```csharp
private void ResetBalancerId()
```

##### `ResetTargetSetId` <a name="ResetTargetSetId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.resetTargetSetId"></a>

```csharp
private void ResetTargetSetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.autoWeightInput">AutoWeightInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.balancerIdInput">BalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.targetSetIdInput">TargetSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.autoWeight">AutoWeight</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.balancerId">BalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.targetSetId">TargetSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoWeightInput`<sup>Optional</sup> <a name="AutoWeightInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.autoWeightInput"></a>

```csharp
public object AutoWeightInput { get; }
```

- *Type:* object

---

##### `BalancerIdInput`<sup>Optional</sup> <a name="BalancerIdInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.balancerIdInput"></a>

```csharp
public string BalancerIdInput { get; }
```

- *Type:* string

---

##### `TargetSetIdInput`<sup>Optional</sup> <a name="TargetSetIdInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.targetSetIdInput"></a>

```csharp
public string TargetSetIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AutoWeight`<sup>Required</sup> <a name="AutoWeight" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.autoWeight"></a>

```csharp
public object AutoWeight { get; }
```

- *Type:* object

---

##### `BalancerId`<sup>Required</sup> <a name="BalancerId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.balancerId"></a>

```csharp
public string BalancerId { get; }
```

- *Type:* string

---

##### `TargetSetId`<sup>Required</sup> <a name="TargetSetId" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.targetSetId"></a>

```csharp
public string TargetSetId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoadBalancersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureLoginOutputReference <a name="ElastigroupAzureLoginOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureLoginOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resetSshPublicKey">ResetSshPublicKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetSshPublicKey` <a name="ResetSshPublicKey" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.resetSshPublicKey"></a>

```csharp
private void ResetSshPublicKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.sshPublicKeyInput">SshPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.sshPublicKey">SshPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `SshPublicKeyInput`<sup>Optional</sup> <a name="SshPublicKeyInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.sshPublicKeyInput"></a>

```csharp
public string SshPublicKeyInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.sshPublicKey"></a>

```csharp
public string SshPublicKey { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLoginOutputReference.property.internalValue"></a>

```csharp
public ElastigroupAzureLogin InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureLogin">ElastigroupAzureLogin</a>

---


### ElastigroupAzureManagedServiceIdentitiesList <a name="ElastigroupAzureManagedServiceIdentitiesList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureManagedServiceIdentitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.get"></a>

```csharp
private ElastigroupAzureManagedServiceIdentitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureManagedServiceIdentitiesOutputReference <a name="ElastigroupAzureManagedServiceIdentitiesOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureManagedServiceIdentitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureManagedServiceIdentitiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureNetworkAdditionalIpConfigsList <a name="ElastigroupAzureNetworkAdditionalIpConfigsList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureNetworkAdditionalIpConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.get"></a>

```csharp
private ElastigroupAzureNetworkAdditionalIpConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureNetworkAdditionalIpConfigsOutputReference <a name="ElastigroupAzureNetworkAdditionalIpConfigsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureNetworkAdditionalIpConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.resetPrivateIpVersion">ResetPrivateIpVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrivateIpVersion` <a name="ResetPrivateIpVersion" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.resetPrivateIpVersion"></a>

```csharp
private void ResetPrivateIpVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.privateIpVersionInput">PrivateIpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.privateIpVersion">PrivateIpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivateIpVersionInput`<sup>Optional</sup> <a name="PrivateIpVersionInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.privateIpVersionInput"></a>

```csharp
public string PrivateIpVersionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateIpVersion`<sup>Required</sup> <a name="PrivateIpVersion" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.privateIpVersion"></a>

```csharp
public string PrivateIpVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureNetworkOutputReference <a name="ElastigroupAzureNetworkOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.putAdditionalIpConfigs">PutAdditionalIpConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resetAdditionalIpConfigs">ResetAdditionalIpConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resetAssignPublicIp">ResetAssignPublicIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalIpConfigs` <a name="PutAdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.putAdditionalIpConfigs"></a>

```csharp
private void PutAdditionalIpConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.putAdditionalIpConfigs.parameter.value"></a>

- *Type:* object

---

##### `ResetAdditionalIpConfigs` <a name="ResetAdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resetAdditionalIpConfigs"></a>

```csharp
private void ResetAdditionalIpConfigs()
```

##### `ResetAssignPublicIp` <a name="ResetAssignPublicIp" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.resetAssignPublicIp"></a>

```csharp
private void ResetAssignPublicIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.additionalIpConfigs">AdditionalIpConfigs</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList">ElastigroupAzureNetworkAdditionalIpConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.additionalIpConfigsInput">AdditionalIpConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.assignPublicIpInput">AssignPublicIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.subnetNameInput">SubnetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.virtualNetworkNameInput">VirtualNetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.assignPublicIp">AssignPublicIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.subnetName">SubnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.virtualNetworkName">VirtualNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalIpConfigs`<sup>Required</sup> <a name="AdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.additionalIpConfigs"></a>

```csharp
public ElastigroupAzureNetworkAdditionalIpConfigsList AdditionalIpConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkAdditionalIpConfigsList">ElastigroupAzureNetworkAdditionalIpConfigsList</a>

---

##### `AdditionalIpConfigsInput`<sup>Optional</sup> <a name="AdditionalIpConfigsInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.additionalIpConfigsInput"></a>

```csharp
public object AdditionalIpConfigsInput { get; }
```

- *Type:* object

---

##### `AssignPublicIpInput`<sup>Optional</sup> <a name="AssignPublicIpInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.assignPublicIpInput"></a>

```csharp
public object AssignPublicIpInput { get; }
```

- *Type:* object

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SubnetNameInput`<sup>Optional</sup> <a name="SubnetNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.subnetNameInput"></a>

```csharp
public string SubnetNameInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkNameInput`<sup>Optional</sup> <a name="VirtualNetworkNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.virtualNetworkNameInput"></a>

```csharp
public string VirtualNetworkNameInput { get; }
```

- *Type:* string

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.assignPublicIp"></a>

```csharp
public object AssignPublicIp { get; }
```

- *Type:* object

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SubnetName`<sup>Required</sup> <a name="SubnetName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.subnetName"></a>

```csharp
public string SubnetName { get; }
```

- *Type:* string

---

##### `VirtualNetworkName`<sup>Required</sup> <a name="VirtualNetworkName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.virtualNetworkName"></a>

```csharp
public string VirtualNetworkName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetworkOutputReference.property.internalValue"></a>

```csharp
public ElastigroupAzureNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureNetwork">ElastigroupAzureNetwork</a>

---


### ElastigroupAzureScalingDownPolicyDimensionsList <a name="ElastigroupAzureScalingDownPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureScalingDownPolicyDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.get"></a>

```csharp
private ElastigroupAzureScalingDownPolicyDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureScalingDownPolicyDimensionsOutputReference <a name="ElastigroupAzureScalingDownPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureScalingDownPolicyDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureScalingDownPolicyList <a name="ElastigroupAzureScalingDownPolicyList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureScalingDownPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.get"></a>

```csharp
private ElastigroupAzureScalingDownPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureScalingDownPolicyOutputReference <a name="ElastigroupAzureScalingDownPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureScalingDownPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetActionType">ResetActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetAdjustment">ResetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetCooldown">ResetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetEvaluationPeriods">ResetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMaxTargetCapacity">ResetMaxTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMinTargetCapacity">ResetMinTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetStatistic">ResetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimensions` <a name="PutDimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.putDimensions"></a>

```csharp
private void PutDimensions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* object

---

##### `ResetActionType` <a name="ResetActionType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetActionType"></a>

```csharp
private void ResetActionType()
```

##### `ResetAdjustment` <a name="ResetAdjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetAdjustment"></a>

```csharp
private void ResetAdjustment()
```

##### `ResetCooldown` <a name="ResetCooldown" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetCooldown"></a>

```csharp
private void ResetCooldown()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetEvaluationPeriods` <a name="ResetEvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetEvaluationPeriods"></a>

```csharp
private void ResetEvaluationPeriods()
```

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMaximum"></a>

```csharp
private void ResetMaximum()
```

##### `ResetMaxTargetCapacity` <a name="ResetMaxTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMaxTargetCapacity"></a>

```csharp
private void ResetMaxTargetCapacity()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMinimum"></a>

```csharp
private void ResetMinimum()
```

##### `ResetMinTargetCapacity` <a name="ResetMinTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetMinTargetCapacity"></a>

```csharp
private void ResetMinTargetCapacity()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetPeriod"></a>

```csharp
private void ResetPeriod()
```

##### `ResetStatistic` <a name="ResetStatistic" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetStatistic"></a>

```csharp
private void ResetStatistic()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList">ElastigroupAzureScalingDownPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.actionTypeInput">ActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.adjustmentInput">AdjustmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.cooldownInput">CooldownInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.evaluationPeriodsInput">EvaluationPeriodsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maximumInput">MaximumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maxTargetCapacityInput">MaxTargetCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minimumInput">MinimumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minTargetCapacityInput">MinTargetCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.periodInput">PeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.policyNameInput">PolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.statisticInput">StatisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.actionType">ActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.adjustment">Adjustment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.cooldown">Cooldown</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maximum">Maximum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maxTargetCapacity">MaxTargetCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minimum">Minimum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minTargetCapacity">MinTargetCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.period">Period</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.statistic">Statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.dimensions"></a>

```csharp
public ElastigroupAzureScalingDownPolicyDimensionsList Dimensions { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyDimensionsList">ElastigroupAzureScalingDownPolicyDimensionsList</a>

---

##### `ActionTypeInput`<sup>Optional</sup> <a name="ActionTypeInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.actionTypeInput"></a>

```csharp
public string ActionTypeInput { get; }
```

- *Type:* string

---

##### `AdjustmentInput`<sup>Optional</sup> <a name="AdjustmentInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.adjustmentInput"></a>

```csharp
public string AdjustmentInput { get; }
```

- *Type:* string

---

##### `CooldownInput`<sup>Optional</sup> <a name="CooldownInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.cooldownInput"></a>

```csharp
public double CooldownInput { get; }
```

- *Type:* double

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.dimensionsInput"></a>

```csharp
public object DimensionsInput { get; }
```

- *Type:* object

---

##### `EvaluationPeriodsInput`<sup>Optional</sup> <a name="EvaluationPeriodsInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.evaluationPeriodsInput"></a>

```csharp
public double EvaluationPeriodsInput { get; }
```

- *Type:* double

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maximumInput"></a>

```csharp
public string MaximumInput { get; }
```

- *Type:* string

---

##### `MaxTargetCapacityInput`<sup>Optional</sup> <a name="MaxTargetCapacityInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maxTargetCapacityInput"></a>

```csharp
public string MaxTargetCapacityInput { get; }
```

- *Type:* string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minimumInput"></a>

```csharp
public string MinimumInput { get; }
```

- *Type:* string

---

##### `MinTargetCapacityInput`<sup>Optional</sup> <a name="MinTargetCapacityInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minTargetCapacityInput"></a>

```csharp
public string MinTargetCapacityInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.periodInput"></a>

```csharp
public double PeriodInput { get; }
```

- *Type:* double

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.policyNameInput"></a>

```csharp
public string PolicyNameInput { get; }
```

- *Type:* string

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.statisticInput"></a>

```csharp
public string StatisticInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.actionType"></a>

```csharp
public string ActionType { get; }
```

- *Type:* string

---

##### `Adjustment`<sup>Required</sup> <a name="Adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.adjustment"></a>

```csharp
public string Adjustment { get; }
```

- *Type:* string

---

##### `Cooldown`<sup>Required</sup> <a name="Cooldown" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.cooldown"></a>

```csharp
public double Cooldown { get; }
```

- *Type:* double

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; }
```

- *Type:* double

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maximum"></a>

```csharp
public string Maximum { get; }
```

- *Type:* string

---

##### `MaxTargetCapacity`<sup>Required</sup> <a name="MaxTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.maxTargetCapacity"></a>

```csharp
public string MaxTargetCapacity { get; }
```

- *Type:* string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minimum"></a>

```csharp
public string Minimum { get; }
```

- *Type:* string

---

##### `MinTargetCapacity`<sup>Required</sup> <a name="MinTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.minTargetCapacity"></a>

```csharp
public string MinTargetCapacity { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.period"></a>

```csharp
public double Period { get; }
```

- *Type:* double

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.statistic"></a>

```csharp
public string Statistic { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingDownPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureScalingUpPolicyDimensionsList <a name="ElastigroupAzureScalingUpPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureScalingUpPolicyDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.get"></a>

```csharp
private ElastigroupAzureScalingUpPolicyDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureScalingUpPolicyDimensionsOutputReference <a name="ElastigroupAzureScalingUpPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureScalingUpPolicyDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureScalingUpPolicyList <a name="ElastigroupAzureScalingUpPolicyList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureScalingUpPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.get"></a>

```csharp
private ElastigroupAzureScalingUpPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureScalingUpPolicyOutputReference <a name="ElastigroupAzureScalingUpPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureScalingUpPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetActionType">ResetActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetAdjustment">ResetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetCooldown">ResetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetEvaluationPeriods">ResetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMaxTargetCapacity">ResetMaxTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMinTargetCapacity">ResetMinTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetStatistic">ResetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimensions` <a name="PutDimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.putDimensions"></a>

```csharp
private void PutDimensions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* object

---

##### `ResetActionType` <a name="ResetActionType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetActionType"></a>

```csharp
private void ResetActionType()
```

##### `ResetAdjustment` <a name="ResetAdjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetAdjustment"></a>

```csharp
private void ResetAdjustment()
```

##### `ResetCooldown` <a name="ResetCooldown" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetCooldown"></a>

```csharp
private void ResetCooldown()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetEvaluationPeriods` <a name="ResetEvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetEvaluationPeriods"></a>

```csharp
private void ResetEvaluationPeriods()
```

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMaximum"></a>

```csharp
private void ResetMaximum()
```

##### `ResetMaxTargetCapacity` <a name="ResetMaxTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMaxTargetCapacity"></a>

```csharp
private void ResetMaxTargetCapacity()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMinimum"></a>

```csharp
private void ResetMinimum()
```

##### `ResetMinTargetCapacity` <a name="ResetMinTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetMinTargetCapacity"></a>

```csharp
private void ResetMinTargetCapacity()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetPeriod"></a>

```csharp
private void ResetPeriod()
```

##### `ResetStatistic` <a name="ResetStatistic" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetStatistic"></a>

```csharp
private void ResetStatistic()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList">ElastigroupAzureScalingUpPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.actionTypeInput">ActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.adjustmentInput">AdjustmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.cooldownInput">CooldownInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.evaluationPeriodsInput">EvaluationPeriodsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maximumInput">MaximumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maxTargetCapacityInput">MaxTargetCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minimumInput">MinimumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minTargetCapacityInput">MinTargetCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.periodInput">PeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.policyNameInput">PolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.statisticInput">StatisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.actionType">ActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.adjustment">Adjustment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.cooldown">Cooldown</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maximum">Maximum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maxTargetCapacity">MaxTargetCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minimum">Minimum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minTargetCapacity">MinTargetCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.period">Period</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.statistic">Statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.dimensions"></a>

```csharp
public ElastigroupAzureScalingUpPolicyDimensionsList Dimensions { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyDimensionsList">ElastigroupAzureScalingUpPolicyDimensionsList</a>

---

##### `ActionTypeInput`<sup>Optional</sup> <a name="ActionTypeInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.actionTypeInput"></a>

```csharp
public string ActionTypeInput { get; }
```

- *Type:* string

---

##### `AdjustmentInput`<sup>Optional</sup> <a name="AdjustmentInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.adjustmentInput"></a>

```csharp
public string AdjustmentInput { get; }
```

- *Type:* string

---

##### `CooldownInput`<sup>Optional</sup> <a name="CooldownInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.cooldownInput"></a>

```csharp
public double CooldownInput { get; }
```

- *Type:* double

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.dimensionsInput"></a>

```csharp
public object DimensionsInput { get; }
```

- *Type:* object

---

##### `EvaluationPeriodsInput`<sup>Optional</sup> <a name="EvaluationPeriodsInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.evaluationPeriodsInput"></a>

```csharp
public double EvaluationPeriodsInput { get; }
```

- *Type:* double

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maximumInput"></a>

```csharp
public string MaximumInput { get; }
```

- *Type:* string

---

##### `MaxTargetCapacityInput`<sup>Optional</sup> <a name="MaxTargetCapacityInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maxTargetCapacityInput"></a>

```csharp
public string MaxTargetCapacityInput { get; }
```

- *Type:* string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minimumInput"></a>

```csharp
public string MinimumInput { get; }
```

- *Type:* string

---

##### `MinTargetCapacityInput`<sup>Optional</sup> <a name="MinTargetCapacityInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minTargetCapacityInput"></a>

```csharp
public string MinTargetCapacityInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.periodInput"></a>

```csharp
public double PeriodInput { get; }
```

- *Type:* double

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.policyNameInput"></a>

```csharp
public string PolicyNameInput { get; }
```

- *Type:* string

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.statisticInput"></a>

```csharp
public string StatisticInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.actionType"></a>

```csharp
public string ActionType { get; }
```

- *Type:* string

---

##### `Adjustment`<sup>Required</sup> <a name="Adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.adjustment"></a>

```csharp
public string Adjustment { get; }
```

- *Type:* string

---

##### `Cooldown`<sup>Required</sup> <a name="Cooldown" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.cooldown"></a>

```csharp
public double Cooldown { get; }
```

- *Type:* double

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; }
```

- *Type:* double

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maximum"></a>

```csharp
public string Maximum { get; }
```

- *Type:* string

---

##### `MaxTargetCapacity`<sup>Required</sup> <a name="MaxTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.maxTargetCapacity"></a>

```csharp
public string MaxTargetCapacity { get; }
```

- *Type:* string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minimum"></a>

```csharp
public string Minimum { get; }
```

- *Type:* string

---

##### `MinTargetCapacity`<sup>Required</sup> <a name="MinTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.minTargetCapacity"></a>

```csharp
public string MinTargetCapacity { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.period"></a>

```csharp
public double Period { get; }
```

- *Type:* double

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.statistic"></a>

```csharp
public string Statistic { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScalingUpPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureScheduledTaskList <a name="ElastigroupAzureScheduledTaskList" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureScheduledTaskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.get"></a>

```csharp
private ElastigroupAzureScheduledTaskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureScheduledTaskOutputReference <a name="ElastigroupAzureScheduledTaskOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureScheduledTaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetAdjustment">ResetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetAdjustmentPercentage">ResetAdjustmentPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetBatchSizePercentage">ResetBatchSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetScaleMaxCapacity">ResetScaleMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetScaleMinCapacity">ResetScaleMinCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetScaleTargetCapacity">ResetScaleTargetCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdjustment` <a name="ResetAdjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetAdjustment"></a>

```csharp
private void ResetAdjustment()
```

##### `ResetAdjustmentPercentage` <a name="ResetAdjustmentPercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetAdjustmentPercentage"></a>

```csharp
private void ResetAdjustmentPercentage()
```

##### `ResetBatchSizePercentage` <a name="ResetBatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetBatchSizePercentage"></a>

```csharp
private void ResetBatchSizePercentage()
```

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetGracePeriod"></a>

```csharp
private void ResetGracePeriod()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetScaleMaxCapacity` <a name="ResetScaleMaxCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetScaleMaxCapacity"></a>

```csharp
private void ResetScaleMaxCapacity()
```

##### `ResetScaleMinCapacity` <a name="ResetScaleMinCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetScaleMinCapacity"></a>

```csharp
private void ResetScaleMinCapacity()
```

##### `ResetScaleTargetCapacity` <a name="ResetScaleTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.resetScaleTargetCapacity"></a>

```csharp
private void ResetScaleTargetCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustmentInput">AdjustmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustmentPercentageInput">AdjustmentPercentageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.batchSizePercentageInput">BatchSizePercentageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.gracePeriodInput">GracePeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMaxCapacityInput">ScaleMaxCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMinCapacityInput">ScaleMinCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleTargetCapacityInput">ScaleTargetCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.taskTypeInput">TaskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustment">Adjustment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustmentPercentage">AdjustmentPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.gracePeriod">GracePeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMaxCapacity">ScaleMaxCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMinCapacity">ScaleMinCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleTargetCapacity">ScaleTargetCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.taskType">TaskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdjustmentInput`<sup>Optional</sup> <a name="AdjustmentInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustmentInput"></a>

```csharp
public string AdjustmentInput { get; }
```

- *Type:* string

---

##### `AdjustmentPercentageInput`<sup>Optional</sup> <a name="AdjustmentPercentageInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustmentPercentageInput"></a>

```csharp
public string AdjustmentPercentageInput { get; }
```

- *Type:* string

---

##### `BatchSizePercentageInput`<sup>Optional</sup> <a name="BatchSizePercentageInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.batchSizePercentageInput"></a>

```csharp
public string BatchSizePercentageInput { get; }
```

- *Type:* string

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.cronExpressionInput"></a>

```csharp
public string CronExpressionInput { get; }
```

- *Type:* string

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.gracePeriodInput"></a>

```csharp
public string GracePeriodInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `ScaleMaxCapacityInput`<sup>Optional</sup> <a name="ScaleMaxCapacityInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMaxCapacityInput"></a>

```csharp
public string ScaleMaxCapacityInput { get; }
```

- *Type:* string

---

##### `ScaleMinCapacityInput`<sup>Optional</sup> <a name="ScaleMinCapacityInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMinCapacityInput"></a>

```csharp
public string ScaleMinCapacityInput { get; }
```

- *Type:* string

---

##### `ScaleTargetCapacityInput`<sup>Optional</sup> <a name="ScaleTargetCapacityInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleTargetCapacityInput"></a>

```csharp
public string ScaleTargetCapacityInput { get; }
```

- *Type:* string

---

##### `TaskTypeInput`<sup>Optional</sup> <a name="TaskTypeInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.taskTypeInput"></a>

```csharp
public string TaskTypeInput { get; }
```

- *Type:* string

---

##### `Adjustment`<sup>Required</sup> <a name="Adjustment" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustment"></a>

```csharp
public string Adjustment { get; }
```

- *Type:* string

---

##### `AdjustmentPercentage`<sup>Required</sup> <a name="AdjustmentPercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.adjustmentPercentage"></a>

```csharp
public string AdjustmentPercentage { get; }
```

- *Type:* string

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.batchSizePercentage"></a>

```csharp
public string BatchSizePercentage { get; }
```

- *Type:* string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.gracePeriod"></a>

```csharp
public string GracePeriod { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `ScaleMaxCapacity`<sup>Required</sup> <a name="ScaleMaxCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMaxCapacity"></a>

```csharp
public string ScaleMaxCapacity { get; }
```

- *Type:* string

---

##### `ScaleMinCapacity`<sup>Required</sup> <a name="ScaleMinCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleMinCapacity"></a>

```csharp
public string ScaleMinCapacity { get; }
```

- *Type:* string

---

##### `ScaleTargetCapacity`<sup>Required</sup> <a name="ScaleTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.scaleTargetCapacity"></a>

```csharp
public string ScaleTargetCapacity { get; }
```

- *Type:* string

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.taskType"></a>

```csharp
public string TaskType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureScheduledTaskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureStrategyOutputReference <a name="ElastigroupAzureStrategyOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resetDrainingTimeout">ResetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resetLowPriorityPercentage">ResetLowPriorityPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resetOdCount">ResetOdCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDrainingTimeout` <a name="ResetDrainingTimeout" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resetDrainingTimeout"></a>

```csharp
private void ResetDrainingTimeout()
```

##### `ResetLowPriorityPercentage` <a name="ResetLowPriorityPercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resetLowPriorityPercentage"></a>

```csharp
private void ResetLowPriorityPercentage()
```

##### `ResetOdCount` <a name="ResetOdCount" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.resetOdCount"></a>

```csharp
private void ResetOdCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.drainingTimeoutInput">DrainingTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.lowPriorityPercentageInput">LowPriorityPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.odCountInput">OdCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.drainingTimeout">DrainingTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.lowPriorityPercentage">LowPriorityPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.odCount">OdCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DrainingTimeoutInput`<sup>Optional</sup> <a name="DrainingTimeoutInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.drainingTimeoutInput"></a>

```csharp
public double DrainingTimeoutInput { get; }
```

- *Type:* double

---

##### `LowPriorityPercentageInput`<sup>Optional</sup> <a name="LowPriorityPercentageInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.lowPriorityPercentageInput"></a>

```csharp
public double LowPriorityPercentageInput { get; }
```

- *Type:* double

---

##### `OdCountInput`<sup>Optional</sup> <a name="OdCountInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.odCountInput"></a>

```csharp
public double OdCountInput { get; }
```

- *Type:* double

---

##### `DrainingTimeout`<sup>Required</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.drainingTimeout"></a>

```csharp
public double DrainingTimeout { get; }
```

- *Type:* double

---

##### `LowPriorityPercentage`<sup>Required</sup> <a name="LowPriorityPercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.lowPriorityPercentage"></a>

```csharp
public double LowPriorityPercentage { get; }
```

- *Type:* double

---

##### `OdCount`<sup>Required</sup> <a name="OdCount" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.odCount"></a>

```csharp
public double OdCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategyOutputReference.property.internalValue"></a>

```csharp
public ElastigroupAzureStrategy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureStrategy">ElastigroupAzureStrategy</a>

---


### ElastigroupAzureUpdatePolicyOutputReference <a name="ElastigroupAzureUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureUpdatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.putRollConfig">PutRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.resetRollConfig">ResetRollConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRollConfig` <a name="PutRollConfig" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.putRollConfig"></a>

```csharp
private void PutRollConfig(ElastigroupAzureUpdatePolicyRollConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.putRollConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a>

---

##### `ResetRollConfig` <a name="ResetRollConfig" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.resetRollConfig"></a>

```csharp
private void ResetRollConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.rollConfig">RollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference">ElastigroupAzureUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.rollConfigInput">RollConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.shouldRollInput">ShouldRollInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.shouldRoll">ShouldRoll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RollConfig`<sup>Required</sup> <a name="RollConfig" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.rollConfig"></a>

```csharp
public ElastigroupAzureUpdatePolicyRollConfigOutputReference RollConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference">ElastigroupAzureUpdatePolicyRollConfigOutputReference</a>

---

##### `RollConfigInput`<sup>Optional</sup> <a name="RollConfigInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.rollConfigInput"></a>

```csharp
public ElastigroupAzureUpdatePolicyRollConfig RollConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a>

---

##### `ShouldRollInput`<sup>Optional</sup> <a name="ShouldRollInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.shouldRollInput"></a>

```csharp
public object ShouldRollInput { get; }
```

- *Type:* object

---

##### `ShouldRoll`<sup>Required</sup> <a name="ShouldRoll" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.shouldRoll"></a>

```csharp
public object ShouldRoll { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyOutputReference.property.internalValue"></a>

```csharp
public ElastigroupAzureUpdatePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicy">ElastigroupAzureUpdatePolicy</a>

---


### ElastigroupAzureUpdatePolicyRollConfigOutputReference <a name="ElastigroupAzureUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureUpdatePolicyRollConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resetHealthCheckType">ResetHealthCheckType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resetGracePeriod"></a>

```csharp
private void ResetGracePeriod()
```

##### `ResetHealthCheckType` <a name="ResetHealthCheckType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.resetHealthCheckType"></a>

```csharp
private void ResetHealthCheckType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">BatchSizePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.gracePeriodInput">GracePeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.healthCheckTypeInput">HealthCheckTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.gracePeriod">GracePeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.healthCheckType">HealthCheckType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchSizePercentageInput`<sup>Optional</sup> <a name="BatchSizePercentageInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```csharp
public double BatchSizePercentageInput { get; }
```

- *Type:* double

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.gracePeriodInput"></a>

```csharp
public double GracePeriodInput { get; }
```

- *Type:* double

---

##### `HealthCheckTypeInput`<sup>Optional</sup> <a name="HealthCheckTypeInput" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.healthCheckTypeInput"></a>

```csharp
public string HealthCheckTypeInput { get; }
```

- *Type:* string

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```csharp
public double BatchSizePercentage { get; }
```

- *Type:* double

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.gracePeriod"></a>

```csharp
public double GracePeriod { get; }
```

- *Type:* double

---

##### `HealthCheckType`<sup>Required</sup> <a name="HealthCheckType" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.healthCheckType"></a>

```csharp
public string HealthCheckType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```csharp
public ElastigroupAzureUpdatePolicyRollConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzure.ElastigroupAzureUpdatePolicyRollConfig">ElastigroupAzureUpdatePolicyRollConfig</a>

---



